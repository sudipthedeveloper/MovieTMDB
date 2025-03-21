import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhdWQiOiJkZDhhMzlhMDZmYTA4NjA1NDk5OGNhNzc5ODFkZGJjNCIsIm5iZiI6MTc0MjU4OTYxMi4yOTksInN1YiI6IjY3ZGRjZWFjNWY5Nzc4MzZhYjdhODMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
