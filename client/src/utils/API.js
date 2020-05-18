import axios from "axios";
// import {API_BASE_URL, BEARER_TOKEN} from "../utils/hooks/YelpAPI/config";
// import queryString from 'query-string';
// require("dotenv").config();

// const BASEURL = "https://www.instagram.com/(this needs to be a value from an input)/?__a=1";
// const BASEURL = "https://api.instagram.com/oembed?url=https://www.instagram.com/p/";
const BASEURL = "https://www.instagram.com/express/?__a=1"

// const query = "this is the value of the shortcodes";

// const YelpURL = "https://api.yelp.com/v3/"

export default {
  IGsearch: function() {
    return axios.get(BASEURL);
  },
  // Yelpsearch: function(){
  //   return axios.get(YelpURL);
  // }
};



// export function get (path, queryParams) {
//     const query = queryString.stringify(queryParams);
//     return fetch(`${API_BASE_URL}${path}?${query}`, {
//         headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             Origin: 'localhost',
//             withCredentials: true,
//         }
//     })

// }


