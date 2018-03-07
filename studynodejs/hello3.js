function Person(){
    this.message = "hello ";
    this.sayHello = function(){
        console.log(this.message);
    }
}
module.exports = new.Person();