const mongoose = require('mongoose');
mongoose.pluralize(null);
const blogSchema = new mongoose.Schema({
    // Your code goes here
    topic:{type:String,required:true},
    description:{type:String,required:true},
    posted_at:{type:Date,required:true},
    posted_by:{type:String,required:true}
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;