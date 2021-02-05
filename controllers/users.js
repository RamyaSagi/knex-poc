// Bookshelf models
const Tasks = require('../models/tasks');
const User = require('../models/users');

exports.getAll = function(req,res){
  User.fetchAll()
   .then(users => {
     return res.json({
       users: users.serialize()
     });
   })
   .catch(err => {
     return res.json({ err });
   });
};

exports.getUser = function(req,res){
 const { user_id } = req.params;

   User.where('id', user_id)
   .fetch()
   .then(user => {
     return res.json(user)
   })
   .catch(err => {
     return res.json(err)
   })
};

exports.createUser = function(req,res){
 const userBody = {
     email: req.body.email,
     password: req.body.password
   };

   new User(userBody)
   .save()
   .then(result => {
     return res.json(result)
   })
   .catch(err => {
     return res.json(err);
   });
};



exports.getuserTasks = function(req,res){
 const { user_id } = req.params;

   Tasks.where({ user_id })
   .fetchAll()
   .then(tasks => {
     return res.json(tasks);
   })
   .catch(err => {
     return res.json(err);
   });
};

exports.createTaskForUser = function(req,res){
 const taskBody = {
     title: req.body.title,
     is_complete: req.body.is_complete,
     user_id: req.params.id
   };

   new Tasks(taskBody)
   .save()
   .then(result => {
     return res.json(result)
   })
   .catch(err => {
     return res.json(err);
   });
};

exports.editUser = function(req,res){
 const { user_id } = req.params;

   const userBody = {
     email: req.body.email,
     password: req.body.password
   };


   User.where('id', user_id)
   .fetch()
   .then(user => {
     return user.save(userBody)
   })
   .then(result => {
     return res.json(result);
   })
   .catch(err => {
     return res.json(err);
   })
};
