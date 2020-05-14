let url = "";

if (process.env.NODE_ENV == "production") {
  url = "https://covid-api-19.herokuapp.com/api/v1/";
} else {
  url = "http://localhost:3001/api/v1/";
}
const config = {
  url_api: url
};

module.exports = config;
