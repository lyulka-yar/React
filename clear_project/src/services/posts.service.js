import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";


 export const
     postsService = {
     getAll: () => axiosInstance.get(urls.posts).then(value => value.data)
     }

