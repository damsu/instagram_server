var express = require('express');
var bodyParser = require('body-parser');
//var books = require('./routes/books.js');
//var authors = require('./routes/authors.js');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');
var posts = require('./posts.js');
//var grades = require('./routes/grades.js');
var app = express();

// Config cloudinary storage for multer-storage-cloudinary
var storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'insta', // give cloudinary folder where you want to store images
    allowedFormats: ['jpg', 'png'],
});

var parser = multer({ storage: storage });

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 80));
var cors = require('cors');


app.use(cors());
// bodyParser needs to be configured for parsing JSON from HTTP body
app.use(bodyParser.json());

// dummy users, in real life these would be in a database or something
var users = [{
    id: "txgw35",
    username: "damien",
    password: "pwd"
},
    {
        id: "xvj2f2",
        username: "john",
        password: "doe"
    }
];

app.get('/users', function (req, res) {
    res.json(users);
});

app.post('/login', function (req, res) {
    console.log("test");
    console.log(req.body);
    var u = users.find(function (element) {
        return (element.username === req.body.username) && (element.password === req.body.password);
    });

    if (u !== undefined) {
        return res.json({ id: u.id, username: u.username });
    }
    else {
        return res.sendStatus(401);
    }
});

// POST route for reciving the uploads. multer-parser will handle the incoming data based on the 'image' key
// Once multer has completed the upload to cloudinary, it will come to the handling function
// below, which then sends the 201 (CREATED) response. Notice that error handling has not been properly implemented.
app.post('/upload', parser.single('image'), function (req, res) {
    console.log(req.file);
    res.sendStatus(201).send(req.file.url);
    //res.json(req.file);

});

app.post('/register', function (req, res) {
    console.log("test");
    console.log(req.body);
    var newid = Math.random().toString(36).substring(7);
    var newuser = {
        id: newid,
        username: req.body.username,
        password: req.body.password
    };
    users.push(newuser);
});

// Mount our routes behind /api/ prefix
//app.use('/api', books);
//app.use('/api', authors);
app.use('/api', posts);

//app.use('/api', grades);

// Simple hello world route
app.get('/', function (req, res) {
    res.send("Hello world");
});

// start listening for incoming HTTP connections
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
