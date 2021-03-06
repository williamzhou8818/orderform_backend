const express = require('express');
const router = express.Router();

// const { check, validationResult } = require('express-validator/check');
const OrderForm = require('../models/OrderForm');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}));



//@route GET api/orderform
//@desc Get all users contacts
//@access Private
router.get('/', async (req, res) => {
    try {
        const orderForm = await OrderForm.find({}).sort({date: -1});
        res.json(orderForm);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Sever Error');
    }
});

//@route POST api/orderform
//@desc Add new Contacts
//@access Private 
router.post('/',  async (req, res) => {
    const {name, phone, address, qty, pizza_selected, selected, order_id, total} = req.body;
    try { 
        const newOrderForm = new OrderForm({
            title:"Lunch special",
            qty,
            order_id,
            selected,
            pizza_selected,
            name,
            phone,
            address,
            total
        });
        const orderForm = await newOrderForm.save();
        res.json(orderForm);
        transporter.sendMail({
            to:'william.zhou8818@gmail.com',
            from: 'cocopizzashop@gmail.com',
            subject:`Your got new order: ${order_id}`,
            html: `<h1>new order from: ${order_id}, Qty ${qty} </h1><br/>
                    <p>name: ${name},</p>
                    <p>phone: ${phone},</p>
                    <p>address: ${address},</p>
                    <p>Total: $${total}</p>

            `
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');    
    }   
}); 

//@route PUT api/orderform
//@desc Add new orderform
//@access Private 
router.put('/:id', (req, res) => {
    res.send('update a order form ');
}); 


//@route Delete api/orderform
//@desc Delete orderform
//@access Private 
router.delete('/:id', (req, res) => {
    res.send('delete a order ');
}); 


module.exports = router;



