

exports.seed = function(knex) {
  return knex('Projects').del()
    .then(function () {
      return knex('Projects').insert([
        { project_name: 'test seed', description: 'test seed description', completed: true},
      ]);
    });
};