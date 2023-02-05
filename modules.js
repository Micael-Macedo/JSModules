module.exports = class User{
    constructor(nome,email){
        this.nome = nome;
        this.email = email;
    }

    login(){
        console.log(`Ola ${this.nome} do email ${this.email}`)
    }
}