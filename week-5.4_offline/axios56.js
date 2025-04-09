const axios = require("axios");

//POST
//change request method
//send body
//send headers
async function main() {
    const response = await axios.post("https://wwww.toptal.com/developers/postbin/1706261117587-5522551864851", {
        username: "harkirat",
        password: "1234567"
    }, {
        headers: {
            "Authorization" : "Bearer 123"
        }
    });
    console.log(response.data);
}

main();