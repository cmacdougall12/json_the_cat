const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  const apiLink = "https://api.thecatapi.com/v1/breeds/search?q=";

  request(apiLink + breed, (error, response, body) => {
    if (error !== null) {
      callback(error.code, null);
    } else if (body === "[]") {
      callback(
        error,
        `Please confirm breed name was entered correctly. Could not locate breed information for ${breed}`
      );
    } else {
      const data = JSON.parse(body);
      const desc = data[0].description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
