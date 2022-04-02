import axios from "axios";

let dataURL = "https://jsonplaceholder.typicode.com/posts";
let get = () => axios.get(dataURL);

export let postApi = {
  get,
};
