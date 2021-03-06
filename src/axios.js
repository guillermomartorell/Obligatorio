import axios from "axios";

const instance = axios.create({
  baseURL: "https://mathfinderbuilder-default-rtdb.firebaseio.com/",
});

export default instance;
