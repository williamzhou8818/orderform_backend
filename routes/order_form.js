const express = require('express');
const router = express.Router();



//@route GET api/orderform
//@desc Get all users contacts
//@access Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

//@route POST api/orderform
//@desc Add new Contacts
//@access Private 
router.post('/', (req, res) => {
    res.send('create a order ');
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



