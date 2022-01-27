import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";

export const
    postsService = {
    getById: () => axiosInstance.get(`${urls.posts}`)
            .then(users => users.data)
}
