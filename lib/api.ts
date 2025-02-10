import axios from "axios";

export const api = axios.create({
  baseURL: "https://lab-animal-navigator-api-b5ad49c3f908.herokuapp.com/",
});
