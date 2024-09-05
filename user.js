const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/monogpractice')

const userSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);
