import axios from "axios"

const BASE_URL = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';

const BASE_URL_ALL = 'https://api.spacexdata.com/v4/dragons';

async function fetchDragons() {
    try {
        const { data } = await axios.get(BASE_URL);
        return data;
    } catch (error) {
        console.log(error.message)
    }
};

async function fetchAllDragons() {
    try {
        const { data } = await axios.get(BASE_URL_ALL);
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export { fetchDragons, fetchAllDragons };