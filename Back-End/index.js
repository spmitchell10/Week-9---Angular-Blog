const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
var mongoose = require('mongoose');
const Blog = require('./models/blog.js')
const Author = require('./models/author.js')

// mongo database 
mongoose.connect('mongodb://Stephen:admin1@ds119081.mlab.com:19081/personalblog');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






// Get all of blogs


app.get('/blog', function(req, res) {
    Blog.find().populate('author').exec(function(err, Blogs) { //this finds and returns all of the blogs in the DB
        if (err) return console.error(err);
        res.json(Blogs)
    })
});


// creating data in the database. hardcoding data
app.get('/createAuthor', function(req, res) {
    var anything = new Author({
        firstName: 'stephen',
        lastName: 'mitchell',
    });

    anything.save(function(err) { //'.save' is part of Mongoose saying, save this to the database
        if (err) console.log(err);
        res.json({ success: "Yay!" }); //this communicates with the front end to execute what is being requested
    })
});


// Get a single blog
app.get('/blog/:id', function(req, res) {
    let id = req.params.id //this sets the paramaters for searching for a specific entry by id

    let newBlog = data.filter(user => { //'.filter' filters through until we find the right id that mateches the id we are searching for 
        if (user.id == id) //this is just saying that if the id is the id you're looking for return the id
            return true;
    })
    res.json(newBLog)
});


// Post a new blog
app.post('/blog', function(req, res) {

    let user = { //This defines what 'user' is so we can add them to the DB - this info matches our Schema
        title: req.body.title,
        content: req.body.content,
        author: '5900c408592c5a0566013611',
    }
    var newBlog = new Blog(user);
    newBlog.save(err => { //'.save' is part of Mongoose saying save this up to the database or you can use '.create'
        if (err) console.log(err); //we pass our function through
        res.json({ success: "Yay!" }); //this is just saying that if the id is the id you're looking for return the id
    })

});


// Delete a blog
// app.delete('/blog/:id', function(req, res) {
//     User.remove({ _id: req.params.id }, function(err) { //'req.params.id' searches for the _id we are looking for - remove executes the action of removing 
//         if (err) console.log('Error');
//         res.json({ success: "Yay!" }); //this ties us to the front end promise
//     });
// });


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
