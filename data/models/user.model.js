const db = require('../db.config');

function find() {
    return db('users').select(['id', 'username', 'role_id']);
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(newUser) {
    const [id] = await db('users').insert(newUser);
    return findBy({id});
}

async function update(id, user) {
    const updatedUser = await db('users').where({id}).update(user);
    return findBy({id});
}

async function remove(id) {
    return db('users').where({id}).del();
}

module.exports = {find, findBy, add, update, remove};
