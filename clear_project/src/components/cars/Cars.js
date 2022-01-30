import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../car/Car";

const Cars = ({status}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(res => setCars([...res]))
    }, [status]);

    const styles = {
        display: "flex",
        gap: "10px 35px",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "2rem .5rem"
    }

    return (
        <div>
            <div style={styles}>
                {
                    cars.map(value =>
                        <Car
                            key={value.id}
                            car={value}
                        />)
                }
            </div>
        </div>
    );
};

export default Cars;