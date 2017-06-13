var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    title: String,
    text: String,
    user_id: String,
    upvote: [String],
    downvote: [String],
    createdAt: Date,
    updatedAt: Date
  });

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
