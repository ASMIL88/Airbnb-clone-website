const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { ref } = require("joi");

const listingSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description : String,
    image: {
       url: String,
       filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    Owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    },
});

// In models/listing.js (before creating the model)
listingSchema.index({ location: 1, country: 1 }); // Basic index for faster searches

listingSchema.post("findOneAndDelete",async (listing) => {
    if (listing) {
    await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;