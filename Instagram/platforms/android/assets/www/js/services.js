angular.module('starter.services', [])



    .factory('Users', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var users = [{
            id: 0,
            name: 'Ben Sparrow',
            face: 'img/ben.png',
            followers: [1,2,3,4,5],
            following: [1,2,3,4,5]
        }, {
            id: 1,
            name: 'Max Lynx',
            followers: [0,2,3,4,5],
            following: [0, 2, 3, 4, 5],
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            followers: [0,1,3,4,5],
            following: [0, 1, 3, 4, 5],
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            followers: [0,1,2,4,5],
            following: [0, 1, 2, 4, 5],
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            followers: [0,1,2,3,5],
            following: [0, 1, 2, 3, 5],
            face: 'img/mike.png'
        }, {
            id: 5,
            name: 'damien',
            face:'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
            followers: [0,1,2,3,4],
            following: [0, 1, 3]
        }];

        return {
            all: function () {
                return users;
            },
            remove: function (user) {
                users.splice(users.indexOf(user), 1);
            },
            get: function (userId) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === parseInt(userId)) {
                        return users[i];
                    }
                }
                return null;
            }
        };
    })





.factory('Pictures', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var pictures = [{
        id: 0,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'You on your way?',
        face: 'img/ben.png',
        pic: 'http://wac.450f.edgecastcdn.net/80450F/tri1025.com/files/2013/05/normal_me1.jpg',
        likes: 3
    }, {
        id: 1,
        username: 'damien',
        userId: 5,
        comments: 'Hey, it\'s me',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://under30ceo.com/wp-content/uploads/2012/04/instagram.jpg',
        likes: 19
    }, {
        id: 2,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'I should buy a boat',
        face: 'img/ben.png',
        pic: 'https://s-media-cache-ak0.pinimg.com/736x/1e/93/28/1e9328a87eb6654e3a290645a9620c9d.jpg',
        likes: 5
    }, {
        id: 3,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'Look at my mukluks!',
        face: 'img/ben.png',
        pic: 'http://4.bp.blogspot.com/-F_6SfcFHKRE/UIjJKWfbt8I/AAAAAAAAA6w/AK5H_oGl9io/s1600/nature182.jpg',
        likes: 63
    }, {
        id: 4,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://imgs.abduzeedo.com/files/paul0v2/livefolk/livefolk-03.jpg',
        likes: 11
    }, {
        id: 5,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'https://katepattinson1994.files.wordpress.com/2014/04/free-people-2.jpg',
        likes: 11
    }, {
        id: 6,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'This is wicked good ice cream.',
        face: 'img/ben.png',
        pic: 'http://thetechpanda.com/wp-content/uploads/2012/07/instagram.jpg',
        likes: 11
    }, {
        id: 7,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://www.telegraph.co.uk/content/dam/fashion/DEC/Dec3/donatella-gigi-lead-large.jpg',
        likes: 11
    }, {
        id: 8,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'This is wicked good ice cream.',
        face: 'img/ben.png',
        pic: 'http://cdn.rsvlts.com/wp-content/uploads/2014/01/48.-Bruno-Mars.jpg',
        likes: 11
    }, {
        id: 9,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'This is wicked good ice cream.',
        face: 'img/ben.png',
        pic: 'http://thestylespy.com/wp/wp-content/uploads/3ee47de07e0711e3bbf50e7e7eef1a38_7.jpg',
        likes: 11
    }, {
        id: 10,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://data.whicdn.com/images/60119606/large.jpg',
        likes: 11
    }, {
        id: 11,
        username: 'Ben Sparrow',
        userId: 0,
        comments: 'This is wicked good ice cream.',
        face: 'img/ben.png',
        pic: 'http://data.whicdn.com/images/63547742/large.jpg',
        likes: 11
    }, {
        id: 12,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://i.dailymail.co.uk/i/pix/2015/12/11/19/2F49AD8700000578-3356493-image-a-2_1449860985376.jpg',
        likes: 11
    }, {
        id: 13,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://sizlingpeople.com/wp-content/uploads/2016/02/Kendall-Jenner-Instagram.jpg',
        likes: 11
    }, {
        id: 14,
        username: 'damien',
        userId: 5,
        comments: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'https://ioneglobalgrind.files.wordpress.com/2012/10/instagram-lg.jpeg',
        likes: 11
    }];

    return {
        all: function() {
            return pictures;
        },
        remove: function(picture) {
            pictures.splice(pictures.indexOf(picture), 1);
        },
        get: function(pictureId) {
            for (var i = 0; i < pictures.length; i++) {
                if (pictures[i].id === parseInt(pictureId)) {
                    return pictures[i];
                }
            }
            return null;
        }
    };
});
