const express = require('express');
const dataSchema = require('../models/data.model');
const jwt = require('jsonwebtoken');
const { ensureToken } = require('../middlewares/authenticated');
const data = {};

data.post = async (req, res) => {
    jwt.verify(req.token, 'user', async(err, data)=>{
        if(err){
            res.sendStatus(403)
        }else{
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
                    "status" : true
                });
        }
    })
}

data.get = async (req, res) => {
    jwt.verify(req.token, 'user', async (err, dataj) => {
        if(err){
            res.sendStatus(403);
        }else{
            const ress = await dataSchema.find({user: dataj.username});
            console.log(ress);
            res.json(ress);
        }
    })
};

module.exports = data;