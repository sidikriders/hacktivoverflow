const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var server = require('../app')
var Questions = require("../models/questions.js")
var should = chai.should()

describe('artikel', () => {
  var question_id = ''
  beforeEach(done => {
    var newQuestions = new Questions({
      title: "some tittle",
      text: "some text",
      user_id: "someid",
      upvote: [],
      downvote: [],
      createdAt: new Date(),
      updatedAt: new Date()
    })

    newQuestions.save(() => {
      question_id = newQuestions._id
      done()
    })
  })

  afterEach((done) => {
    Questions.remove({}, () => {
      done()
    })
  })

  describe('GET /question', () => {
    it('should get all Questions', () => {

      chai.request(server)
        .get('/question') // methodnya bisa get atau post atau yg lainnya
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.equal(0)

      })
    })
  })

  describe('GET /question/:id', () => {
    it('should get one Question', () => {

      chai.request(server)
        .get(`/question/${question_id}`) // methodnya bisa get atau post atau yg lainnya
        .end((err, res) => {
          console.log('------response /question/id--------');
          console.log(res.body);
          res.should.have.status(200)
          res.body.should.be.a('object')
      })
    })
  })

  describe('POST /question/new', () => {
    it('should make one new Question', () => {

      chai.request(server)
      .post('/question/new')
      .send({
        newTitle: "some title",
        newText: "some text",
        user_id: "someUser_id"
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object');
        res.body.should.have.property('title')
        res.body.should.have.property('text')
        res.body.should.have.property('user_id')
        res.body.should.have.property('createdAt')
        res.body.should.have.property('_id')
        res.body.should.have.property('upvote')
        res.body.should.have.property('downvote')
      })
    })
  })

})
