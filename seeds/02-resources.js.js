
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        { resource_name: 'test seed resources', description: 'test seed description resources', project_id: 1},
      ]);
    });
};