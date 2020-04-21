const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const MONGOURL = 'mongodb+srv://wbadmin:adminpassword@whiteboardapp-623rs.mongodb.net/test?retryWrites=true&w=majority'
const app = express();

mongoose.connect(MONGOURL).then(() => console.log("MongoDB Connected")).catch(error => console.log(error));

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
    }
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        var user = new User(req.body);
        var ans = await user.save();
        res.send(ans);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        var user = await User.findOne({ email: req.body.email }).exec();
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

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on ' + port);
})