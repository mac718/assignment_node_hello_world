const chalk = require('chalk');
var _ = require('lodash');

let arr = [1, 2, 3];
 
console.log(chalk.blue('Hello world!'));

_.each(arr, function(num){
  console.log(num);
})