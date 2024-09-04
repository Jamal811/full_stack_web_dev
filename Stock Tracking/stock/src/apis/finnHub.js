import axios from "axios";

const TOKEN = "cr901l1r01qmiu0b0pv0cr901l1r01qmiu0b0pvg";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
