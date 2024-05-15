import axios from "axios"

const Axiosbase = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://fawr-server.vercel.app',
})

const useAxiosConfig = () => {
    return Axiosbase
}

export default useAxiosConfig