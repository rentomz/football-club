import axios from "axios";

axios.defaults.baseURL = "https://api.football-data.org/v2";

const clientToken = '9e0ffbeece7244ad9cf02f3e6e613fe5'
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = "append,delete,entries,foreach,get,has,keys,set,values,Authorization";
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, DELETE, PUT";

axios.defaults.headers.common["X-Auth-Token"] = clientToken;

// if (clientToken) {
//   axios.defaults.headers.common["X-Auth-Token"] = clientToken;
// } else {
//   delete axios.defaults.headers.common["X-Auth-Token"];
// }




