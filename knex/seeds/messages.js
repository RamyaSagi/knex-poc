
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          name: 'name1',
          message: 'message1'
        },
        {
          name: 'name2',
          message: 'message2'
        },
        {
          name: 'name3',
          message: 'message3'
        }
      ]);
    });
};
