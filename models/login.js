const mongoose = require('mongoose');

// A login Model/Schema.
const Login = mongoose.model('Login', {
    email: String,
    password: String
});


module.exports = {Login};