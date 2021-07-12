var express = require('express');
var router = express.Router();
const vapiService = require('../services/vapi-service').getInstance();

router.post('/', function(req, res, next) {
    const subscription = req.body;

    console.log(subscription);

    // this.mongo.save({
        //idUser: req.params.id,
        //sub: subscription
    //});
    })

    vapiService.init();
    vapiService.send(subscription, 'Test 2');

    res.status(201).json({});
});

module.exports = router;
