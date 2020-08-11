const express = require('express');
const router = express.Router();

// const { check, validationResult } = require('express-validator/check');
const EmailsSender = require('../models/EmailsSender');

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

// router.get('/', async (req, res) => {
//     try {
//         const orderForm = await OrderForm.find({}).sort({date: -1});
//         res.json(orderForm);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Sever Error');
//     }
// });

//@route POST api/orderform
//@desc Add new Contacts
//@access Private 
router.post('/',  async (req, res) => {
    const {name, order_id, email} = req.body;
    try { 
        const newEmailsSender = new EmailsSender({
            title:"Lunch special",
            order_id,
            name
        });
        const emailsSender = await newEmailsSender.save();
        res.json(emailsSender);
        transporter.sendMail({
            to: email,
            from: 'cocopizzashop@gmail.com',
            subject:`Your order number is: ${order_id}`,
            html: `<h3>Hi ${name}, Thank for ordering Lunch special at coco pizza shop,<br/>
            you order numberis ${order_id}.</h3> <br/>
            
           

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



