import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "201316ce74fd40e5ae9884a24a39969d",
  },
});
