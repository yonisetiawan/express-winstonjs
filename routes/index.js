var express = require('express');
var router = express.Router();
var winston = require('winston');

/* GET home page. */
router.get('/', function(req, res, next) {
  winston.log('info', 'Hello distributed log files!');
  winston.info('Hello again distributed logs');
  winston.level = 'debug';
  winston.log('debug', 'Now my debug messages are written to console!');
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
