/**
 * recived customer name that from forom input 
 * and email address and order_id 
 * 
 * sent back comfirm email to customer
 */
const mongoose = require('mongoose');

const  emailsSchema = mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    order_id: {
        type: String,
        require: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('emails', emailsSchema);

