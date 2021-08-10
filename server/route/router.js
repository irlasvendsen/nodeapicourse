const { response } = require('express');
const express = require('express');
const router = express.Router();
const { messageOfTheDay } = require('../api/message');
const userService = require('../service/userService');
const jwt = require('express-jwt');

router.use(jwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}).unless(({path: ['/users/login']})));


//router.get('/users', jwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']), async (req, res) => {
router.get('/users', async (req, res) => {
    try {
        const users = await userService.getUsers();
        console.log('this is users router', users)
        res.json(users)
    }
    catch(err) {
        res.status(400).send(err);
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const users = await userService.getUser(req.params.id);
        console.log('this is users router', users)
        res.send(users)
    }
    catch(err) {
        res.status(400).send(err);
    }

});
router.post('/users', async (req, res) => {
    try {
        const id = await userService.addUser(req.body);
        res.json(id);
    }
    catch(err) {
        res.status(400).send(err);
    }
})

router.patch('/users/:id', async (req, res) => {
    try {
        await userService.editUser(req.params.id, req.body);
        res.sendStatus(200)
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.sendStatus(200)
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const token = await userService.login(req.body)
        res.send(token);
    }
    catch(err) {
        res.status(401).send(err);
    }
})

router.get('/message', async (req, res) => {
    console.log('is this beeing hit?')
    const message =   await messageOfTheDay();
    console.log(message);
    res.send(message)
})

module.exports = router;