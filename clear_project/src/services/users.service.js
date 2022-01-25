import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";


export const
    usersService = {
    getAll: () => axiosInstance.get(`${urls.users}`)
            .then(users => users.data)
}
