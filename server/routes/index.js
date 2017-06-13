var express = require('express');
var router = express.Router();
const Questions = require('../models/questions');
const Answers = require('../models/answers');
const Users = require('../models/users');


var bcrypt = require('bcrypt');
const saltRounds = 10;


/* GET home page. */
router.get('/question', function(req, res, next) {
  Questions.find({}, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(response)
    }
  })
});

router.post('/question/new', function(req, res, next) {
  Questions.create({
    title: req.body.newTitle,
    text: req.body.newText,
    user_id: req.body.user_id,
    upvote: [],
    downvote: [],
    createdAt: new Date(),
    updateAt: new Date()
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(response)
    }
  })
})

router.get('/question/:id', function(req, res, next) {
  let QandA = {};
  Questions.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      Answers.find({
        question_id: req.params.id
      }, function(error, rezponse) {
        if(error) {
          console.log(error);
        } else {
          QandA = {
            question: response,
            answers: rezponse
          }
          res.send(QandA)
        }
      })
    }
  })
})

// belom di test
router.put('/question/:id', function(req, res, next) {
  Questions.findOneAndUpdate({
    _id: req.params.id
  }, {
    title: req.body.newTitle,
    text: req.body.newText,
    updatedAt: new Date()
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(response)
    }
  })
})

// belom di test juga
router.delete('/question/:id', function(req,res,next) {
  Questions.remove({
    _id: req.params.id
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(response)
    }
  })
})

//user mulai di mari
router.post('/signup', function(req, res, next) {
  let hash = bcrypt.hashSync(req.body.newPass, saltRounds);
  Users.create({
    username: req.body.newUsername,
    pass: hash,
    fullname: req.body.newFullname,
    email: req.body.newEmail
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  })
})

router.post('/signin', function(req, res, next) {
  Users.findOne({
    username: req.body.username
  }, function(err, response) {
    if (err) {
      console.log(err);
    } else if (!response) {
      res.send('username tersebut tidak ditemukan')
    } else {
      if (bcrypt.compareSync(req.body.password, response.pass)) {
        res.send('berhasil log in')
      } else {
        res.send('passwod salah')
      }
    }
  })
})


//answernya
router.post('/answer', function(req, res, next) {
  Answers.create({
    title: req.body.title,
    text: req.body.text,
    question_id: req.body.question_id,
    user_id: req.body.user_id,
    upvote: [],
    downvote: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('berhasil')
    }
  })
})

router.put('/answer/:id', function(req, res, next) {
  Answer.findOneAndUpdate({
    _id:req.params.id
  }, {
    title: req.body.newTitle,
    text: req.body.newText,
    updatedAt: new Date()
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('berhasil')
    }
  })
})

router.delete('/answer/:id', function(req, res, next) {
  Answer.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('terhapus')
    }
  })
})






module.exports = router;
