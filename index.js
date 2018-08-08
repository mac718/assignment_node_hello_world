const chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var logs = require('./data/logs');


_.each(logs, function(entry){
  logger.log(entry.message, entry.level);
});