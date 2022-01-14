import { celebrate, Joi, Segments } from 'celebrate';

export const indexProduct = celebrate({
  [Segments.QUERY]: {
    page: Joi.number(),
    limit: Joi.number(),
  },
});

export const showProduct = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const createProduct = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    volume: Joi.number().required(),
    availability: Joi.number().required(),
    price: Joi.number().required(),
    ingredients: Joi.string().required(),
    thumbnail: Joi.string().required(),
    others: Joi.string().required(),
    pharmacyId: Joi.string().required(),
  },
});

export const updateProduct = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    name: Joi.string(),
    volume: Joi.number(),
    availability: Joi.number(),
    price: Joi.number(),
    ingredients: Joi.string(),
    thumbnail: Joi.string(),
    others: Joi.string(),
  },
});

export const cloneProduct = celebrate({
  [Segments.PARAMS]: {
    productId: Joi.string().required(),
    pharmacyId: Joi.string().required(),
  },
});

export const deleteProduct = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
