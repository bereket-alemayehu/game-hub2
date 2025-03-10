import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "58766e3b70e6447fa8b070a17a73d349",
  },
});
