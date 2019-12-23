
exports.up = function(knex) {
  return knex.schema.createTable('Tasks', tbl => {
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.bool('completed', false).notNullable()
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Tasks')
};
