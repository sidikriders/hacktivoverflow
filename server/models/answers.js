var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
    title: String,
    text: String,
    question_id: String,
    user_id: String,
    upvote: [String],
    downvote: [String],
    createdAt: Date,
    updatedAt: Date
  });

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
