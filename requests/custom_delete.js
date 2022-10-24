const axios = require("axios");

const url = "http://localhost:5000/constellations/YMLRU3b";

axios.delete(url).then((response) => {
  console.log(response);
});
