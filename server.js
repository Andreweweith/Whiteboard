const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const cors = require('cors');
const mongoURL = 'mongodb+srv://admin:adminpassword@cluster0-loslm.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
app.use(cors());

mongoose.connect(mongoURL).then(() => console.log("MongoDB Connected")).catch(error => console.log(error));

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minLength: 5
    },
    name:{
        type: String,
        required: true,
        minLength: 2
    }
});

const serverSchema = mongoose.Schema({ name: String });
const serversSchema = mongoose.Schema({
    server_id:{
        type: String,
        required: true,
        unique: 1,
        minlength: 8
    },
    user_list: {
        type: [String],
        required: true
    },
    all_messages:{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Messages'
    }
})

const messageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectID,
        ref:'User',
        required: true
    },
    content:{
        type: String,
        minLength: 1
    },
    server_id:{
        type: mongoose.Schema.Types.ObjectID,
        ref:'server',
        minLength: 1
    },
    timestamp: String
})

const User = mongoose.model('User', userSchema);
const Server = mongoose.model('Server', serverSchema);
const Messages = mongoose.model('Messages', messageSchema);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/signup/", async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let user = new User(req.body);
        let ans = await user.save();
        res.send(ans);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/signin", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).exec();
        if(!user)
        {
            return res.status(400).send({ message: "Email not in database" });
        }
        if(!bcrypt.compareSync(req.body.password, user.password))
        {
            return res.status(400).send({ message: "Invalid Password" });
        }
        res.send({ message: "User successfully logged in!" });
        // Add logged in page pusher here

    } catch (error) {
        res.status(500).send(error);
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on ' + port);
})