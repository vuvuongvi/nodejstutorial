function Person(name, password){
    this.name = name;
    this.password = password;
}
Person.prototype.getName = function(){
    return this.name;
}
Person.prototype.getPassword = function(){
    return this.password;
}
Person.prototype.getLevel = function(){
    return this.level;
}
Person.prototype.level = "admin";

function User(name){
    this.name = name;
}
User.prototype = new Person();

var person = new Person("Ti","78910");
var User = new User("Teo","12346");
console.log(User.getName());   
console.log(User.getLevel()); 
console.log(User.getPassword());

Date.prototype.vnFormat = function(){
    var yyyy =  this.getFullYear();
    var mm   = this.getMonth() +1;
    var dd =  this.getDate();
    return dd + "/" + mm + "/" + yyyy;
}
var now = new Date();
var xms = new Date(5,5,2015);
console.log(now.vnFormat());
console.log(xms.vnFormat());