

exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { project_name: 'test seed', description: 'test seed description', completed: true},
      ]);
    });
};