const fs = require('fs');
const { Command } = require('commander');         //it lets you create CLI quickly      //here i import command class
const program = new Command();                // creating an object of class Command

program
    .name('file related cli')                 //Giving to a name
    .description('CLI to do file based tasks')          //giving it a decription
    .version('0.8.0');        //giving it a version

program.Command('count_words')       //this is the first command .It can have multiple commands
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {            //getting access to the file
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                console.log(err);
            }else{
                const lines = data.split(' ').length;         //to find no of lines you can put \n in split method
                console.log(`There are ${lines} lines in ${file}`);
            }
        });
    });

program.Command('count_sentences')       //this is the second command .It can have multiple commands
    .description('Count the number of sentences in a file')
    .argument('<file>', 'file to count')
    .action((file) => {            //getting access to the file
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                console.log(err);
            }else{
                const lines = data.split('\n').length;         //split() does:gujjula bhavana => ["gujjula", "bhavana"]
                console.log(`There are ${lines} lines in ${file}`);
            }
        });
    });
program.parse();



/*

the main reason for using command is that it doesn't give error wehen we run "node Command_Line_interface.js -h" in terminal 
that's the main use case of command
*/