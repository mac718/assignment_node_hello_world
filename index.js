const chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger')

logger.log('hello', 'info');
logger.info('hello');
logger.warning('hello');
logger.error('hello');