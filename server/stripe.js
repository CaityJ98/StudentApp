const express = require('express');
const stripe = require("stripe")("sk_test_51KfHu4J2aB8GXvezuQXfIEd2tPtzUnPEjxCZtT56pTB5mxdkfX1eOvXkpPnXgoOZHrqJohQnUfKW8EFroClhFJY800821ZpmGL");
const { v4: uuidv4 } = require('uuid');
const stripeRouter = express.Router();


stripeRouter.post("/pay", (req, res, next) => {
    console.log(req.body.token);
    const {token, amount} = req.body;
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token,

    }).then(customer => {
        stripe.charges.create({
            amount: amount,
            currency: 'aud',
            customer: customer.id,
        }, {idempotencyKey})
    }).then(result => {
        return res.status(200).json(result)
    }).catch(err => {
        console.log(err);
    })
})

module.exports = stripeRouter;