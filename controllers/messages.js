// Bookshelf model
const Messages = require('../models/messages');

exports.getAll = function(req,res){
 Messages.fetchAll()
  .then(messages => {
    res.send(messages);
  })
  .catch(err => {
    return res.json({ err });
  });
};

exports.createMessage = async function(req,res){
 console.log(req.body.name)
  try{
      let newEntry = {
      name: req.body.name,
      message: req.body.message
    };

    new Messages(newEntry)
    .save()
    .then(result => {
      console.log("saved")
      res.send(result);
    })
    .catch(err => {
      res.sendStatus(500);
    });
  }
  catch (error){
    res.sendStatus(500);
    return console.log('error',error);
  }
};

exports.getOneMessage = function(req,res){
  console.log(req.params);
  Messages.where('id', req.params.id)
  .fetch()
  .then(message => {
    res.send(message)
  }).catch(err => {
    return res.json(err)
  });
};

exports.editMessage = function(req,res){
 console.log(req.params)

  let updateEntry = {
      name: req.body.name,
      message: req.body.message
    };

  Messages.where('id', req.params.id)
  .fetch()
  .then(message => {
    message.save(updateEntry)
    res.json({success: true});
  })
  .then(result => {
    return res.json(result);
  })
  .catch(err => {
    return res.json(err);
  })
};

exports.deleteMessage = function(req,res){
 Messages.where('id',  req.params.id)
  .destroy()
  .then(result => {
    return res.json({success: true});
  })
  .catch(err => {
    return res.json(err);
  });
};

exports.deleteAll = function(req,res){
  Messages.where('id', '!=', '0')
  .destroy()
  .then(result => {
    return res.json({success: true});
  })
  .catch(err => {
    return res.json(err);
  });
}