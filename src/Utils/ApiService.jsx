import axios from "axios";
const API_URL='https://6597a518668d248edf231ccf.mockapi.io'
 const axioService=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
 })

 export default axioService