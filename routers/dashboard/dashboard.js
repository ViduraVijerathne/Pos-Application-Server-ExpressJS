const express = require('express');
const router = express.Router();

// Generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
router.get('/inhight',(req,res)=>{
    resObj= {body:[
        {
            title : "Total Sales",
            count : getRandomInt(1, 100000),
        
        },
        {
            title : "Total Income",
            count : getRandomInt(1, 100000),
        
        },
        {
            title : "Total Orders",
            count : getRandomInt(1, 100000),
        
        },
        {
            title : "Total Return",
            count : getRandomInt(1, 100000),
        
        },
       
    ]}
    res.send(resObj)
})
module.exports = router;