
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table)=>{
      table.increments();
      table.string('username', 255)
      table.string('email', 255)
      table.string('code', 15)
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
