const fs = require("fs");

function main(fileName){
    
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

main("a.txt");