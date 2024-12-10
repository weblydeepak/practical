const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true,'Email is mandatory'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'Must have a password'],
        minlength: 8,
    select: false,
    },
},
{timestamps:true}
);

const User = mongoose.model('newUser',userSchema);
module.exports= User;