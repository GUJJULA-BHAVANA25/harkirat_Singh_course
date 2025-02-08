const fs = require("fs");

function main(fileName){
    console.log(process.argv); 
    fs.readFile(fileName, "utf-8", function(err, data){
        let total = 1;
        for(let i = 0; i < data.length; i++){
            if(data[i] === " "){              //calculating no of spaces 
                total++;
            }
        }
        console.log(total);
    })
}

main(process.argv[2]);         //node Dynamic_file_input.js E:\Courses\Harkirath Singh\week-4.1\a.txt