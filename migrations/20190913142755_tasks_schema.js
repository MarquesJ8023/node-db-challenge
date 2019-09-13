
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.bool('completed', false).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
};
