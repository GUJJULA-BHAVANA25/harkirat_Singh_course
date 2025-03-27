const axios = require("axios");

async function main() {
    const response = await fetch("https://wwww.toptal.com/developers/postbin/1706261117587-5522551864851",
        {
            method: "POST",
        },
    );
    const textualData = await response.text();
    console.log(textualData);
}



