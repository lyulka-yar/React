import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

const carsService = {
    getAll: () => axiosInstance.get(urls.cars)
        .then(response => response.data),
    createCar: (car) => axiosInstance.post(urls.cars, car)
        .then(value => value.data),
    getById: (id) => axiosInstance.get(`${urls.cars}/${id}`)
        .then(value => value.data), 
    updateById: (id, car) => axiosInstance.patch(`${urls.cars}/${id}`, car)
        .then(value => value.data),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
}
export {carsService};