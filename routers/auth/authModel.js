class AuthModel{
    constructor(username,password,key,status,message){
        this.username = username;
        this.password = password;
        this.key = key;
        this.status = status;
        this.message  = message;
    }


}

module.exports = AuthModel;