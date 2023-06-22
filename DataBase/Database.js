const mysql = require('mysql2');
class Database {
    constructor() {
        this.connection = null;
        this.userName = 'root';
        this.password = '6jfmd672@V';
        this.database = 'pos_app';
        this.conCount = 0;
    }

    createConnection() {
        if (!this.connection) {
            this.conCount = this.conCount + 1;
            this.connection = mysql.createConnection({
                host: 'localhost',
                user: this.userName,
                password: this.password,
                database: this.database,
                port: 3306
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
