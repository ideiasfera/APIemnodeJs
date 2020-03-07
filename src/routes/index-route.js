'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "MELO API em nodeJs",
        version: "1.0.0"
    });
});

module.exports = router;