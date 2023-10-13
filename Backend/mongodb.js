const mongoose = require('mongoose'); // Adding Mongoose for MongoDB
require('dotenv').config();

const mongo_uri = process.env.MONGO_URI;

// Mongoose setup
const MongoDB = mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
});
module.exports = MongoDB