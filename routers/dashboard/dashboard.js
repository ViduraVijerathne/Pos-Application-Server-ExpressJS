const express = require('express');
const router = express.Router();

router.get('/inhight',(req,res)=>{
    resObj= {body:[
        {
            title : "Total sales1",
            count : 25.0,
        
        },
        {
            title : "Total Sex",
            count : 251100,
        
        },
        {
            title : "Total Income 3",
            count : 6541011,
        
        },
        {
            title : "Total Income",
            count : 55250.0,
        
        },
       
    ]}
    res.send(resObj)
})
module.exports = router;