const mongoose = require('mongoose');

const  OrderFormSchema = mongoose.Schema({
    title: { 
        type: String,
        require: true
    },
    qty: {
        type: String,
        require: true
    },
    order_id: {
        type: String,
        require: true,
        unique: true
    },
    name: { 
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    pizza_selected: [],
    selected: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true
    },
    total: { 
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('orderform', OrderFormSchema);

