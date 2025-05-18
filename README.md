# Airbnb-clone-website

A full-stack Airbnb-style hotel listing application built with Node.js, Express.js, MongoDB, and EJS. This project allows users to create, read, update, and delete hotel listings, upload images, leave reviews, and search by location or country. The project follows the **MVC (Model-View-Controller) architecture** for clean code organization.

---

## 📌 Features

✅ **User Authentication** – Secure signup, login, and session management  
✅ **Create Listings** – Users can add new hotel/property listings with images and location  
✅ **Read Listings** – Browse all listings and view details, images, and reviews  
✅ **Update Listings** – Owners can edit their listings and update images  
✅ **Delete Listings** – Owners can remove their listings  
✅ **Review System** – Users can leave reviews and ratings on listings  
✅ **Search Functionality** – Search hotels by location or country  
✅ **Map Integration** – Interactive maps showing hotel locations  
✅ **Image Upload** – Upload and manage images using Cloudinary  
✅ **RESTful API Endpoints** – Built using Express.js  
✅ **Server-side Validation** – All user input is validated using Joi  
✅ **Flash Messages** – User feedback for actions like login, logout, create, update, and delete  
✅ **Error Handling** – Custom error handling middleware for user-friendly error messages  
✅ **Session Management** – Secure user sessions for authentication  
✅ **MVC Structure** – Organized using the Model-View-Controller pattern

---

## 🚀 Installation & Setup

Clone the repository  
```sh
git clone https://github.com/ASMIL88/Airbnb-clone-website.git
```

Navigate to the project folder  
```sh
cd Airbnb-clone-website
```

Install dependencies  
```sh
npm install
```

Set up your `.env` file with your MongoDB, Cloudinary, and Mapbox credentials.

Start the server  
```sh
node app.js
```

Open your browser and go to:  
[http://localhost:8080/listings](http://localhost:8080/listings)

---

## 📌 Technologies & Tools Used

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web framework for routing and middleware  
- **MongoDB & Mongoose** – Database and ODM  
- **EJS** – Templating engine for dynamic HTML  
- **Passport.js** – User authentication  
- **Cloudinary** – Image storage and management  
- **Mapbox** – Geocoding and interactive maps  
- **Bootstrap** – Responsive UI  
- **Multer** – File upload handling  
- **dotenv** – Environment variable management  
- **Joi** – Data validation for request bodies  
- **connect-flash** – Flash messages for user feedback  
- **method-override** – Support for PUT and DELETE HTTP verbs in forms  
- **express-session** – Session management  
- **MVC Architecture** – Clean separation of concerns

---

## 📦 Major NPM Packages

- express
- mongoose
- ejs
- passport
- passport-local
- express-session
- connect-flash
- method-override
- dotenv
- multer
- multer-storage-cloudinary
- cloudinary
- mapbox-sdk
- joi

---

## 🌐 APIs Used

- **Cloudinary API** – For image uploads and storage  
- **Mapbox Geocoding API** – For converting locations to coordinates and displaying maps

---

## 📁 Project Structure (MVC)

```
Major project/
│
├── models/         # Mongoose schemas (Listing, Review, User)
├── views/          # EJS templates (with layouts and partials)
├── controllers/    # Route handler logic (listing, user, review controllers)
├── routes/         # Express route definitions
├── public/         # Static assets (CSS, JS, images)
├── utils/          # Utility modules (e.g., error handling)
├── cloudConfig.js  # Cloudinary and Multer config
├── Schema.js       # Joi validation schemas
├── app.js          # Main application entry point
└── .env            # Environment variables (not committed)
```

---

## 📩 Contributing

Want to contribute? Fork the repository and submit a pull request!

---

## 📜 License

This project is open-source and free to use for learning and development.
