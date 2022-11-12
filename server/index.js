const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const UserModel = require('./models/User');

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://admin:password123a@crud.bfowslq.mongodb.net/users?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
    }
);

app.post("/createUser", async(req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const url_photo = req.body.url_photo;

    const user = new UserModel({
        name: name,
        email: email,
        phone: phone,
        url_photo: url_photo,
    });

    try{
        await user.save()
    } catch(err){
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('server funcionando');
})