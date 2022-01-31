import React, {useEffect} from 'react';
import {CarValidator} from "../../validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {CarsService} from "../../services/cars.service";

const Form = ({toggleStatus, carForWatch: {id, model, price, year}, setCar}) => {

    const {reset, setValue, handleSubmit, register, formState: {errors}} = useForm({
        mode: "onTouched",
        resolver: joiResolver(CarValidator)
    });

    useEffect(() => {
        setValue("model", model);
        setValue("price", price);
        setValue("year", year);
    }, [id])

    const submit = async (car) => {
        let newCar;
        try {
            switch (!!id) {
                case (id === false):
                    newCar = await CarsService.createNewCar(car).catch(e => console.error(e));
                    toggleStatus(newCar);
                    reset();
                    break;
                case  (!id === false):
                    newCar = await CarsService.updateById(id, car).catch(e => console.error(e));
                    toggleStatus(newCar);
                    reset();
                    break;
                default:
                    console.error(errors)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={"form-block"}>
            <form
                name={"carForm"}
                onSubmit={handleSubmit(submit)}
            >
                <div
                    className={"form-block__input"}
                >
                    <input
                        placeholder={"model"}
                        {...register("model")}
                        type="text"/>
                    {errors.model && <span className={"form-block__input-error"}>{errors.model.message}</span>}
                </div>
                <div
                    className={"form-block__input"}>
                    <input
                        placeholder={"price"}
                        {...register("price")}
                        type="text"/>
                    {errors.price && <span className={"form-block__input-error"}>{errors.price.message}</span>}
                </div>
                <div
                    className={"form-block__input"}>
                    <input
                        placeholder={"year"}
                        {...register("year")}
                        type="text"/>
                    {errors.year && <span className={"form-block__input-error"}>{errors.year.message}</span>}
                </div>
                <button
                    onClick={()=> setTimeout(()=> {setCar({})},200)}
                    type={"submit"}>

                    {id
                        ?
                        "update"
                        : "create"
                    }
                </button>
            </form>
        </div>
    );
}

export {Form};