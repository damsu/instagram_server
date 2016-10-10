var data = require('../data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllPosts(req, res, next) {
    res.json(data.getAllPosts());
}


//
// Declare routes
//

router.route('/posts')
    .get(getAllPosts)

module.exports = router;