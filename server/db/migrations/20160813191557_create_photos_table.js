exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', function (table) {
    table.increments('id').primary();
    table.string('file_path');
    table.integer('user_id');
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');
};

