const db = require('../database/data')


exports.getUsers =  () => {
    const q = "SELECT id, name, email FROM users";
    return db.awaitQuery(q);
}

exports.addUser = async (data) => {
    const q = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const result = await db.awaitQuery(q, [data.name, data.email, data.password]);
    return result.insertId;
}

exports.deleteUser = (id) => {
    const q = "DELETE FROM users WHERE id = ?";
    return db.awaitQuery(q, [id]);
}

exports.editUser = (id, data) => {
    const q = "UPDATE users set name = ?, email = ? where id = ?";
    return db.awaitQuery(q, [data.name, data.email, id]);
}

exports.getUser = (id) => {
    const q = "SELECT id, name, email FROM users WHERE id = ?";
    return db.awaitQuery(q, [id]);
     
}

exports.getUserByEmail = (email) => {
    const q = "SELECT id, name, email, password FROM users WHERE email = ?";
    return db.awaitQuery(q, [email]);
}
