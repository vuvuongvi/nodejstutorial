var message = "hello world";
function sayHello(){
    console.log(this.message);
}
module.exports = {
    sayHello: sayHello
}