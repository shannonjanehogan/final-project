exports.seed = function(knex, Promise) {
  return knex('photos').del()
    .then(function () {
      return Promise.all([
        knex('photos').insert({
          id: 1,
          user_id: 1,
          file_path: 'public/images/users/1/sunset.jpg'
        }),
      ]);
    });
};

