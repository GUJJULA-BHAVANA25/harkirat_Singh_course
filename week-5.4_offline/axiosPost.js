const axios = require("axios");

//fetch vs axios

//POST 
async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos", {
        method: "POST"
    });
    const json = await response.json();
    consolelog(json.todos.length);
}

async function  main() {
    const response = await axios.post("https://sum-server.100xdevs.com/todos");
    console.log(response.data);
}

main();