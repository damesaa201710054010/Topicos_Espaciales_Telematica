const express = require('express');
const userSchema = require('../models/user.model');
const jwt = require('jsonwebtoken');
const usere = {};

usere.create = async (req, res) => {
    const { username,
        password,
        id,
        edad } = req.body;
    const newUser = new userSchema({
        username,
        password,
        id,
        edad
    });
    console.log(newUser);
    await newUser.save();
    res.json({
        "task": "nice"
    });
}

usere.login = async (req, res) => {
    console.log(req.body);
    const token = jwt.sign(req.body,'user', {expiresIn: '7d'});
    res.json({
        token
    })
}

module.exports = usere;