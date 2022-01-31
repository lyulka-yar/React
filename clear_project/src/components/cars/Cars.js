import React, {useEffect, useState} from 'react';

import {CarsService} from "../../services/cars.service";
import {Car} from "../car/Car";

const Cars = ({status, toggleStatus, setCar}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarsService.getAll().then(value => setCars([...value]));
    },[status]);

    console.log(cars)
    return (
        <div className={"cars-block"}>
            {
                cars.map(value =>
                    <Car
                        key={value.id}
                        car={value}
                        toggleStatus={toggleStatus}
                        setCar={setCar}
                    />)
            }
        </div>
    );
};

export {Cars};