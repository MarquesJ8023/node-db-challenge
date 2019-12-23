

exports.up = function(knex, promise) {
    return knex.schema.createTable('projects_tasks', tbl => {
      tbl.increments('id');
      tbl.integer('projects_id').notNullable().references('projects.id');
      tbl.integer('tasks_id').notNullable().references('tasks.id');
      tbl.integer('task_no').notNullable();
    })
  };
  
  exports.down = function(knex, promise) {
    return knex.schema.dropTableIfExists('projects_tasks');
  };