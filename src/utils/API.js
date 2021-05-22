import axios from "axios";

const BASEURL = "api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = "b4b407e1c227fb03804663cfcb368554";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(cityname) {
    return axios.get(BASEURL + cityname + APIKEY);
  }
};
