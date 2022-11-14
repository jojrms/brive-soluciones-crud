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

app.get("/", async(req, res) => {
    UserModel.find({}, (err, result) => {

        if( err ){
            res.send(err)
        }

        res.send(result)
        
    });
});

app.post("/createUser", async(req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const photo_url = req.body.photo_url;

    const user = new UserModel({
        name: name,
        email: email,
        phone: phone,
        photo_url: photo_url,
    });

    try{
        await user.save()
    } catch(err){
        console.log(err);
    }
});

app.post('/user', (req, res) => {
    UserModel.find({_id: req.body.id}, function(result, err){
        if(!err){
            res.send(result)
        } else{
            res.send(err)
        }
    })
});

app.delete("/deleteUser/:id", async(req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndRemove(id).exec();
    res.send("deleted user")
});

app.post("/editUser", async(req, res) => {

    UserModel.findOneAndUpdate({_id: req.body.id}, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    }, (err) => {
        if(!err){
            res.send("The user has updated");
        } else{
            res.send(err)
        }
    })
});

app.listen(3001, () => {
    console.log('server funcionando');
})