
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('description', 128);
        tbl.bool('completed', false).notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
