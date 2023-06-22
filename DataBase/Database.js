const mysql = require('mysql2');
require('dotenv').config();

class Database {
    constructor() {
        this.connection = null;
        this.userName = process.env.DB_USR_NAME;
        this.password = process.env.DB_PASSWORD;
        this.database = process.env.DB_DATABASE;
        this.conCount = 0;
    }

    createConnection() {
        if (!this.connection) {
            this.conCount = this.conCount + 1;
            this.connection = mysql.createConnection({
                host: process.env.DB_SERVER,
                user: this.userName,
                password: this.password,
                database: this.database,
                port: process.env.DB_PORT
            });
        }

        return this.connection;
    }

    async iud(query) {
        try {
            await this.createConnection().execute(query);
        } catch (err) {
            console.error('Error executing IUD query:', err);
            throw err;
        }
    }

    async search(query) {

        console.log("SEARCH QUERY RUNNING.. | Connection Count : "+this.conCount);

        const row = await this.createConnection().promise().execute(query);
        console.log(row[0]);


        console.log("SEARCH QUERY END ");

        return row[0];


       
    }

   

}

module.exports = Database;
