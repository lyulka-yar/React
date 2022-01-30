import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../services/cars.service";
import {CarValidator} from "../validators/car.validator";

const Form = ({toggleStatus}) => {
//watch
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onTouched"
    });
    const [error, setError] = useState({});

    console.log(error);
    
    const submit = (newCar) => {
        carsService.createCar(newCar)
            .catch(err => setError(err.response.data));
        toggleStatus(newCar);
        reset();
    }

    return (
        <div>
            <form
                name={"createCar"}
                onSubmit={handleSubmit(submit)}
            >

                <div>
                    <input
                        type={"text"}
                        {...register("model")}
                        defaultValue={""}
                        placeholder={"model"}
                    />
                    {/*{error.model && <span>{error.model[0]}</span>}  wrong*/}
                    {errors.model && <span>{errors.model.message}</span>}
                </div>

                <div>
                    <input
                        {...register("price")}
                        type={"text"}
                        defaultValue={""}
                        placeholder={"price"}
                    />
                    {/*{error.price && <span>{error.price[0]}</span>} wrong*/}
                </div>

                <div>
                    <input
                        {...register("year")}
                        type={"text"}
                        defaultValue={""}
                        placeholder={"year"}
                    />
                    {/*{error.year && <span>{error.year[0]}</span>} wrong*/}
                </div>
                <input
                    type="submit"
                    value={"create"}
                />
            </form>
        </div>
    );
};

export default Form;