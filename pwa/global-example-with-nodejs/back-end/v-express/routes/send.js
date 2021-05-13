var express = require('express');
var router = express.Router();
const vapiService = require('../services/vapi-service').getInstance();

router.get('/', function(req, res, next) {
    res.render('send', { title: 'Send notif' });
  });

router.post('/', function(req, res, next) {
    const subscription = req.body;

    vapiService.init();
    vapiService.send(subscription, 'Test 2');

    res.status(201).json({});
});

module.exports = router;
