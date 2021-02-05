// Controllers
const Message = require('./controllers/messages');
const Users = require('./controllers/users');
const Tasks = require('./controllers/tasks');

// Expose Routes
module.exports = function(app){

    // Message Routes
	app.get('/messages', Message.getAll);
	app.post('/messages', Message.createMessage);
	app.get('/messages/:id', Message.getOneMessage);
	app.put('/messages/:id', Message.editMessage);
	app.delete('/messages/:id', Message.deleteMessage);
	app.delete('/messages', Message.deleteAll);

	// User Routes
	app.get('/users', Users.getAll);
	app.get('/users/:user_id', Users.getUser);
	app.post('/users', Users.createUser);
	app.get('/users/:user_id/tasks', Users.getuserTasks);
	app.post('/users/:user_id/tasks', Users.createTaskForUser);
	app.put('/users/:user_id', Users.editUser);

	// Task Routes
	app.get('/tasks', Tasks.getAll)
	app.get('/tasks/:task_id', Tasks.getTask);
	app.put('/tasks/:task_id', Tasks.editTask);
	app.delete('/tasks/:task_id', Tasks.deleteTask);
};
