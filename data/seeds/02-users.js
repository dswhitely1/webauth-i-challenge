const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {username: 'admin', password: bcrypt.hashSync('password', 10), role_id: 1},
                {username: 'user', password: bcrypt.hashSync('password', 10), role_id: 2}
            ]);
        });
};
