const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();   
const User = require('../models/user');

router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.send('Error' + error);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.send('Error' + error);
    }
})

router.get('/:username/:password', async(req, res) => {
    var usernameParam, passwordParam;
    usernameParam = req.params['username'];
    passwordParam = req.params['password'];
    try {
        // const user = await User.findById(req.params.id);
        await dbo.collection("users").find({
            projection: {
            "name": usernameParam, "password": passwordParam 
            } 
        }).toArray(function(err, result){
            console.log(result);
            res.send(result);
        })
        // res.json(user);
    } catch (error) {
        res.send('Error' + error);
    }
})

router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const u1 = await user.save();
        res.send(u1._id);
    } catch (error) {
        res.send('Error' + error);
    }
})
module.exports = router;