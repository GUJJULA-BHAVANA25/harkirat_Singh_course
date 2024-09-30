function setTimeoutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout){
            break;
        }
    }
}

setTimeoutSync(1000)

console.log("Hi there");



function readFromTwofiles(file1, file2){
    //read through first file
    //read through second file

    //readfile,setTimeout, fetch , database calls
    return [file1Res, file2Res];
}