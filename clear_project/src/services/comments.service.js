import {axiosInstance} from "./axiosService";
import {urls} from "../config/urls";


export const commentsService = {
    getAll: () => axiosInstance.get(urls.comments).then(comments => comments.data)

}