const connectDB = require('./config/db');
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())

const PORT  = process.env.PORT || 5000;

// Connect Databases;
connectDB();

//Init middlewar
app.use(express.json({extended: false}));


//Define Routes
app.use('/api/orderform', require('./routes/order_form'));
app.use('/api/sendemail', require('./routes/email_sender'));

app.get('/', (req, res) => res.json({msg: "Welcome to the coco pizza shop booking api"}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



