const express = require('express');
const router = express.Router();
const Database = require('../../DataBase/Database');
const database = new Database();
const AuthModel = require('./authModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Generate a JWT
function generateJwt(payload) {
    // Set the payload data and JWT secret
    const jwtPayload = payload;
    const jwtSecret = process.env.API_SECRET_KEY;

    // Generate the JWT
    const token = jwt.sign(jwtPayload, jwtSecret, { expiresIn: '24h' });
    console.log(token)
    return token;
}

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    if (username== "vidura" && password == "123") {
        const authModel = new AuthModel(username, password,generateJwt(req.body), true,"done");
        const response = JSON.stringify(authModel);
        console.log("Auth Response : ", response)
        res.send(response)
    } else {
        const authModel = new AuthModel("null", "null", "null", false,"invalid username or password");
        const response = JSON.stringify(authModel);
        res.send(response)
    }
    // await database.search(`SELECT * FROM admin WHERE  username = '${username}' AND password = '${password}'`)
    //     .then((rows) => {
    //         if (rows.length == 1) {
    //             const authModel = new AuthModel(rows[0]['username'], rows[0]['password'],generateJwt(req.body), true);
    //             const response = JSON.stringify(authModel);
    //             console.log("Auth Response : ", response)
    //             res.send(response)
    //         } else {
    //             const authModel = new AuthModel(null, null, null, false);
    //             const response = JSON.stringify(authModel);
    //             res.send(response)
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error executing query:', error);
    //         res.status(500).send('Internal Server Error');
    //     });


})

module.exports = router;