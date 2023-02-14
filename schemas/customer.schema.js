const Joi = require('joi');

const id = Joi.number().integer();
const firstName = Joi.string().min(2);
const lastName = Joi.string().min(2);
const phone = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(3);

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName,
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCustomerSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }

