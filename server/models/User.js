const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    photo_url:{
        type: String,
        required: false,
    }
});

const Users = mongoose.model("Users", UserSchema)
module.exports = Users;