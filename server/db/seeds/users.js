exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          name: 'Alice',
          email: 'alice@gmail.com',
          security_question: 'Who was your favorite teacher?',
          security_answer: 'Ms.Bell'
        }),
      ]);
    });
};
