import axios from "axios";
import {urls} from "../config/urls";

   let axiosInstance = axios.create({baseURL: urls.baseURL});


 export const getLaunches = {
       getAll : () => {
          return axiosInstance.get(urls.launches).then(launches =>
            launches.data);
       }
   };