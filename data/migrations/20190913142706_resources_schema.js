
exports.up = function(knex) {
  return knex.schema.createTable('Resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128).notNullable();
      tbl.string('description', 128);
      tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Projects')
      .onUpdate('Cascade')
      .onDelete('Cascade');

  })
};

exports.down = function(knex) {
  return schema.dropTableIfExists('Resources')
};
