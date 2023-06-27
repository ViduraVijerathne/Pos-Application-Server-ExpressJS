const express = require('express');
const router = express.Router();

router.get('/inhight',(req,res)=>{
    resObj= {body:[
        {
            title : "Total sales",
            count : 250,
        
        },
        {
            title : "Total oders ",
            count : 250,
        
        },
        {
            title : "Total Income",
            count : 250,
        
        },
        {
            title : "Total Income",
            count : 250,
        
        },
        {
            title : "Total OutGoing",
            count : 250,
        
        },
    ]}
    res.send(resObj)
})
module.exports = router;