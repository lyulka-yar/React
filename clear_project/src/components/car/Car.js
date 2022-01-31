import React from 'react';
import {CarsService} from "../../services/cars.service";

const Car = ({car: {id, model, price, year}, car, toggleStatus, setCar}) => {

    const deleteCar = async () => {
        await CarsService.deleteById(id);
        toggleStatus({});
    }

    return (
        <div className={"cars-block__card"}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>

            <div
                className={"cars-block__buttons-block"}
            >
                <a
                    href={"#"}
                    onClick={() => {
                        setCar(car);
                    }}
                >
                    &uarr;
                </a>
                <a
                    href={"#"}
                    onClick={() => deleteCar()}
                >
                    &times;
                </a>
            </div>

        </div>
    );
};

export {Car};