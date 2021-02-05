const bookshelf = require('./bookshelf.js');

const Messages = bookshelf.Model.extend({
  tableName: 'messages'
});

module.exports = Messages;
