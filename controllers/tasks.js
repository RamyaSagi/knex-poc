// Bookshelf models
const Tasks = require('../models/tasks');
const User = require('../models/users');

exports.getAll = function(req,res){
 Tasks.fetchAll()
   .then(tasks => {
     res.send(tasks);
   })
   .catch(err => {
     return res.json({ err });
   });
};

exports.getTask = function(req,res){
 const { task_id } = req.params;

   Tasks.where('id', task_id)
   .fetch()
   .then(task => {
     return res.json(task)
   })
   .catch(err => {
     return res.json(err)
   })
};

exports.editTask = function(req,res){
 const { task_id } = req.params;

   const taskBody = {
     title: req.body.title,
     is_complete: req.body.is_complete,
     updated_at: new Date
   }

   Tasks.where('id', task_id)
   .fetch()
   .then(task => {
     return task.save(taskBody)
   })
   .then(result => {
     return res.json(result);
   })
   .catch(err => {
     return res.json(err);
   })
};

exports.deleteTask = function(req,res){
  const { task_id } = req.params;

   Tasks.where('id', task_id)
   .destroy()
   .then(result => {
     return res.json({success: true});
   })
   .catch(err => {
     return res.json(err);
   });
};