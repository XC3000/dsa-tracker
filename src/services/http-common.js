import axios from "axios";

export default axios.create({
  baseURL: "https://cryptic-brushlands-26323.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
