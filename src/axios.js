import axios from "axios";

axios.defaults.baseURL = "https://api.football-data.org/v2";

const clientToken = '9e0ffbeece7244ad9cf02f3e6e613fe5'

axios.defaults.headers.common["X-Auth-Token"] = clientToken;




