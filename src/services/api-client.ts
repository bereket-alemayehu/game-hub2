import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "94761b380f5648669e412ad648da8bd0",
  },
});
