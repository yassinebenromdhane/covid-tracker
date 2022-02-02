import axios from 'axios';


const axiosInstance = axios.create({
    baseURL :  `https://disease.sh/v3/covid-19/`
}) 

export default axiosInstance
