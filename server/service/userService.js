"use strict";
const jwt = require('jwt-simple');
const uuid = require('uuid');
const usersData = require('../models/users')

//const users = [];



exports.getUsers =   () => {
    return usersData.getUsers();
   // return users;
}

exports.addUser = async (data) => {
    console.log(uuid.v4())
    // const user = {
    //     id: uuid.v4(),
    //     name : data.name,
    //     email : data.email
    // } 
    return usersData.addUser(data);
   // users.push(user)
   // return user;
}

exports.deleteUser = (id) => {
    return usersData.deleteUser(id);
    // const user =  users.find(user => {
    //     return user.id === id
    // });
    //if(!user) throw "No User Found"
    //users.pop(user);
}

exports.editUser = (id, data) => {
//    const userIndex = users.findIndex(user => {
//         return user.id === id;
//     });
//     const user = users[userIndex];
    return usersData.editUser(id, data)
    // if(!user) throw "No User Found"
    // //users[userIndex] = {...user, name: data.name, email: data.email};
    // return user
}

exports.getUser = async (id) => {
 
    // const user =  users.find(user => {
    //     return user.id === id
    // });
    const user = await usersData.getUser(id);
    if(!user) throw "No User Found";
    return user;
}

exports.login = async (data) => {
    const users = await usersData.getUserByEmail(data.email);
    if (users.length > 0) {
        const user = users[0];
        console.log('this is user', user, ' this is password', data, ' this is both', user.password === data.password)
        if(user.password === data.password) {
            const paylod = {
                jti: uuid.v4(),
                email: data.email
            }
            const token = jwt.encode(paylod, process.env.JWT_SECRET);
            return token;
        }
    }

}
