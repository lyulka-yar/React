import React from 'react';
import {carsService} from "../../services/cars.service";

const Car = ({car,car: {model, price, year, id}}) => {

    const styles = {
        margin: "0 auto",
        width: "45%",
        card: {
            minWidth: "150px",
            padding: ".5rem",
            border: "1px solid",
            backgroundColor: "lightGrey",
            borderRadius: ".7rem"
        }
    }

    const deleteCar = (carId) => {
        carsService.deleteById(carId).then(value => console.log(value))
    }
    const updateCar = (chosen, carId) => {

        carsService.updateById(carId, car)
            .catch(err => console.log(err));
    }


    return (
        <div style={styles.card}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button
                style={styles}
                onClick={() => {
                    deleteCar(id);
                }}
            >
                &times;
            </button>
            <button
                style={styles}
                onClick={()=>updateCar(car,id)}
            >
                update
            </button>
        </div>
    );
};

export default Car;