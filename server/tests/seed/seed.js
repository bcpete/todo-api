const {ObjectID} = require('mongodb');
const {User} = require('./../../models/user');
const {Todo} = require('./../../models/todo');
const jwt = require('jsonwebtoken');

const todos = [{
  _id: new ObjectID(),
  text: 'First test'
}, {
  _id: new ObjectID(),
  text: 'Second test'
}, {
  _id: new ObjectID(),
  text: 'Third test'
}];

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'testemail@example.com',
  password: 'user1pass!',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
  }, {
  _id: userTwoId,
  email: 'anothertestemail@example.com',
  password:'user2Pass!'
}];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};