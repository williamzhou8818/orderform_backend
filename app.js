const express = require('express');
const app = express();

const PORT  = process.env.PORT || 5000;


//Define Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orderform', require('./routes/order_form'));

app.get('/', (req, res) => res.json({msg: "Welcome to the coco pizza shop booking api"}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



