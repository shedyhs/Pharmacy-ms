import { celebrate, Joi, Segments } from 'celebrate';
// TODO Joi not working, resolve it
export const indexPharmacy = celebrate({
  [Segments.QUERY]: {
    page: Joi.number(),
    limit: Joi.number(),
  },
});

export const showPharmacy = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const createPharmacy = celebrate({
  [Segments.BODY]: {
    logo: Joi.string().required(),
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    address: Joi.string().required(),
    openingHours: Joi.string().required(),
    responsible: Joi.string().required(),
    phone: Joi.string().required(),
    others: Joi.string().required(),
  },
});

export const updatePharmacy = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    logo: Joi.string(),
    name: Joi.string(),
    address: Joi.string(),
    openingHours: Joi.string(),
    responsible: Joi.string(),
    phone: Joi.string(),
    others: Joi.string(),
  },
});

export const deletePharmacy = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
