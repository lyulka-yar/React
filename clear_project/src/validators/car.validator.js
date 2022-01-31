import Joi from "joi";

const CarValidator = Joi.object(
    {
        model: Joi.string().regex(new RegExp("^[[A-Za-zА-яЫіІїЇєЄґҐёЁ]{1,20}$")).required().messages({
            "string.empty": "'model': can`t be empty it`s required field",
            "string.pattern.base": "'length': might be from 1 to 20 only letters"
        }),
        price: Joi.number().min(1).max(1000000).required(),
        year: Joi.number().min(1900).max(new Date().getFullYear()).required()
    });


export {CarValidator};
