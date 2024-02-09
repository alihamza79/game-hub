import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "356f82d9c9c041eebe6dd53f27715db0",
  },
});
