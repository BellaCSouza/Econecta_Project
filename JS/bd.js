const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});


connection.connect(error => {
    if (error) throw error;
    console.log('Conectado ao banco de dadoos!');
});

module.exports = connection;

// método CREATE
function createUser(nome, email) {
    const sql = `INSERT INTO usuarios (nome, email) VALUES (?, ?)`;
    connection.query(sql, [nome, email], (error, results) => {
        if (error) throw error;
        console.log('Usuário criado com ID:', results.insertId);
    });
}


// método READ
function getUsers() {
    const sql = `SELECT * FROM usuarios`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.log('Usuários:', results);
    });
}


//método UPDATE
function updateUser(id, nome, email) {
    const sql = `UPDATE usuarios SET nome = ?, email = ? WHERE id = ?`;
    connection.query(sql, [nome, email, id], (error, results) => {
        if (error) throw error;
        console.log('Usuário atualizado!');
    });
}


//método DELETE
function deleteUser(id) {
    const sql = `DELETE FROM usuarios WHERE id = ?`;
    connection.query(sql, [id], (error, results) => {
        if (error) throw error;
        console.log('Usuário deletado!');
    });
}
