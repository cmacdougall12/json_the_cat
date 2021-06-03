const request = require("request");
const apiLink = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv.slice(2);

request(apiLink + breed, (error, response, body) => {
  if (error !== null) {
    console.log(
      "Could not complete request. Error code, " + error.code + " recieved."
    );
  } else if (body === "[]") {
    console.log(
      `Please confirm breed name was entered correctly. Could not locate breed information for ${breed}`
    );
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
