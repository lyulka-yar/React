import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";


const usersService = {
    getAll: () =>
        axiosInstance.get(urls.users)
            .then(res => res.data)
}
export {usersService};