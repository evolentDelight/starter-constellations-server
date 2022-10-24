const axios = require("axios");

const url = "http://localhost:5000/constellations";

axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });

    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
