const jwtCheck = require('../../middleware/jwtCheck');
const express = require('express');
const router = express.Router();

router.post('/',jwtCheck,(req,res)=>{
    console.log("done");
    res.send("done")
})


module.exports = router;