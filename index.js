const express = require('express');
const dbconnection=require('./db')
require('dotenv').config();
const cors=require('cors');


const app = express();
app.use(cors())
const port = process.env.PORT || 2310
app.use(express.json());

app.use('/api/products',require('./routes/productsRoute'))
app.use('/api/users',require('./routes/usersRoute'))
app.use('/api/bookings',require('./routes/bookingsRoute'))


const path = require("path");


app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(port, () => {
  console.log(`server started ${port}`);
});
