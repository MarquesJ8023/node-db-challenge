
exports.seed = function(knex) {
  return knex('Tasks').del()
    .then(function () {
  
      return knex('Tasks').insert([
        { description: 'test seed tasks', notes: 'test seed notes tasks', completed: true, project_id: 1},
      ]);
    });
};