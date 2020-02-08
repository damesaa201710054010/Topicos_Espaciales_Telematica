const express = require('express');
const dataSchema = require('../models/data.model');
const data = {};

data.post = async (req, res) => {
    const { user,
        temperature,
        humidity,
        latitude,
        longitude,
        hora,
        fecha} = req.body;
    const newData = new dataSchema ({ user,
        temperature,
        humidity,
        latitude,
        longitude,
        hora,
        fecha});
        console.log(newData);
        await newData.save();
        res.json({
            "task" : "nice"
        });
};

data.get = async (req, res) => {
    const data = await dataSchema.find();
    console.log(data);
    res.json(data);
};

module.exports = data;