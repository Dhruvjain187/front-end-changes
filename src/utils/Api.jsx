import axios from 'axios';

const fetchApi = async () => {
    const data = await axios.get('http://localhost:3000/card');
    console.log("data=", data);
    const res = await data.data;
    return res;
}

export const Api = await fetchApi();