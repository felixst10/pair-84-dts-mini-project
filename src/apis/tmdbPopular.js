import axios from "axios";

const tmdbInstancePopular = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // api_key: "06df1306b737e34a239355d0de0d314d",
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export default tmdbInstancePopular;
