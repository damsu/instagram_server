var data = require('./data.js');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllPosts(req, res, next) {
    res.json(data.getAllPosts());
}

function postNewPost(req, res, next) {
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data.addPost(req.body);
    res.sendStatus(201);
}


//
// Declare routes
//

router.route('/posts')
    .get(getAllPosts)
.post(postNewPost);

module.exports = router;