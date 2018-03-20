// Jeffrey Phelps | DU Full-Stack Web Dev Bootcamp 2017/2018 | Mod-18 Homework | News Scraper 

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;