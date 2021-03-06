const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    fname: {
        type: String,
       required: true
    },
    lname: {
        type: String,
       required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
       unique: true
    },
    password:{
        type: String, 
       required: true
    }

}, { timestamps: true });



//module.exports = mongoose.model('Author', authorSchema)
module.exports = mongoose.models['Author'] || mongoose.model('Author', authorSchema)



