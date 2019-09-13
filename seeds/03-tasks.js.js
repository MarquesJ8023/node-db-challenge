
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'test seed tasks', notes: 'test seed notes tasks', completed: true, project_id: 1},
      ]);
    });
};