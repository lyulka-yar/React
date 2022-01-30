import Joi from "joi";

const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp("^[[a-zA-ZА-я]{1,20}$")).required().messages({
        'string.empty':'"model" can`t be empty',
        'string.pattern.base': '"length" only letters from 1 to 20'
    }),
    price: Joi.number().min(1).max(1000000),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required()
});

export {CarValidator};