import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Dbqhj9BoVKszYqcwP4dd0txiQqMEgUZhrjbQOhkUq0g",
  },
});
