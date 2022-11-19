import axios from "axios";

axios.defaults.baseURL = 'https://moments-project-1.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;