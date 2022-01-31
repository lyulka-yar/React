import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

const CarsService = {
    getAll: () => axiosInstance.get(urls.cars)
        .then(cars => cars.data),
    updateById: (id, car) => axiosInstance.patch(`${urls.cars}/${id}`, car)
        .then(cars => cars.data),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`),
    createNewCar: (car) => axiosInstance.post(`${urls.cars}`,car)
        .then(cars => cars.data)
}
export {CarsService};