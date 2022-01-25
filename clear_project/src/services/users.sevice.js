import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";

export const
    userService = {
    getAll: () => axiosInstance.get(urls.users).then(value => value.data)
}