/* Created and written by Connor Walsh { start } ---------> */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const cors = require('cors');
const MONGOURL = 'mongodb+srv://admin:adminpassword@cluster0-loslm.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
app.use(cors());

const WebSocket = require('ws');

mongoose.connect(MONGOURL).then(() => console.log("MongoDB Connected")).catch(error => console.log(error));

/* Schemas written by Connor Walsh, designed in part with Alec Comley and Andrew Weith */

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

const serverSchema = mongoose.Schema({

    server_id:{
        type: String,
        required: true,
        unique: 1,
        minLength: 8
    },

    user_list:{
        type: [String],
        required: true
    },

    all_messages:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Messages'
    }

});

const messageSchema = mongoose.Schema({

    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    content:{
        type: String,
        minLength: 1
    },

    server_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Server',
        unique: 1
    },

    time_sent:{
        type: String
    }
});

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
        var user = new User(req.body);
        var ans = await user.save();
        res.send(ans);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/signin/", async (req, res) => {
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
        res.send(user);

    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/pullmessages/", async (req, res) => {
    try {
        const server = await Server.findOne({ server_id: "Main" }).exec();
        if(!server)
        {
            return res.status(400).send({ message: "No server exists" });
        }
        res.send(server);

    } catch (error) {
        res.status(500).send(error);
    }
});

/* <--------- { end } Contributed by Connor Walsh */



/* Code used from project found at https://github.com/bitlabstudio/blogpost-react-websocket-chat ------> */

const wss = new WebSocket.Server({ port: 3030 });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

/* <------ */



/* Contributed by Connor Walsh { start } ---------> */

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on ' + port);
})

/*<--------- { end } Contributed by Connor Walsh */