const express = require('express');
const port = process.env.port || 3000

const app = express();
app.use(express.json());



//init routers  
const authRoute = require('./routers/auth/auth');
const productAuth = require('./routers/product/product')


//routing
app.use('/auth',authRoute);
app.use('/product',productAuth);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })