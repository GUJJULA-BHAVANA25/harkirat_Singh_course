//create the promisified version of fs.readFile, fs.writeFile, cleanFile
/*
Working of the cleanFile:
-->Reads the contents of a file
-->Trims the extra space from the left and right
-->Writes it back to the file.
*/

cleanFile("a.txt").then (function(){
    console.log("file is cleaned");
})