require('dotenv').config();

const mongo_uri = process.env.MONGO_URI;

// Mongoose setup
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
});
const User = mongoose.model('User', {
    fullName: String,
    username: String,
    hashedPassword: String,
    phoneNumber: String,
});

module.exports = User