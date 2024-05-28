const connection = require ('./connection');

const getAllActors = async() => {
    const [query] = await connection.execute('SELECT * FROM sakila.actor');
    return query;
};

const getActorsById = async(id) => {
    const [query] = await connection.execute('SELECT * FROM sakila.actor WHERE actor_id = ?', [id]);
    return query;
};

module.expors = {getAllActors, getActorsById}