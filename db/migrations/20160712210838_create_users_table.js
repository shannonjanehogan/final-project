exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('security_question');
    table.string('security_answer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
