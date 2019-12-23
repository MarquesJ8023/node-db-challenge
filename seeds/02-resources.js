
exports.seed = function(knex) {
  return knex('Resources').del()
    .then(function () {
      return knex('Resources').insert([
        { resource_name: 'test seed resources', description: 'test seed description resources', project_id: 1},
      ]);
    });
};