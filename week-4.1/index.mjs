import chalk from 'chalk';    //modern import syntax, promises

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold('this is an error message'));
console.log(chalk.green.underline('this is a sucess message'));

//to run this code
//node --experimental-modules index.mjs
