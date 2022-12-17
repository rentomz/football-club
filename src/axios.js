import axios from "axios";

axios.defaults.baseURL = "https://api.football-data.org/";

const clientToken = '9e0ffbeece7244ad9cf02f3e6e613fe5'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.defaults.headers.common["X-Auth-Token"] = clientToken;

// axios.defaults.proxy = {
//   protocol: 'https',
//   host: 'https://api.football-data.org/',
//   port: 9000,
// };



