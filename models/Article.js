// Jeffrey Phelps | DU Full-Stack Web Dev Bootcamp 2017/2018 | Mod-18 Homework | News Scraper 

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Article;