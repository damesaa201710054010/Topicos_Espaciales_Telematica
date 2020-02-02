const express = require('express');
const router = express.Router();
const device = require('../models/device');


router.post('/', async (req, res) => {
    const { user,
    temperature,
    humidity,
    latitude,
    longitude,
    hora,
    fecha} = req.body;
    const newDevice = new device ({ user,
        temperature,
        humidity,
        latitude,
        longitude,
        hora,
        fecha});
    console.log(newDevice);
    await newDevice.save();
    res.json({
        "task" : "nice"
    })
});

router.get('/', async (req, res) => {
    const data = await device.find();
    console.log(data);
    res.json(data);
});

module.exports = router;