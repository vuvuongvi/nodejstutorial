'use strict';
var EventEmmiter = require("events");
class Dialog extends EventEmmiter{
    constructor(){
        super();
        this.message = "Hello World";
    }
    sayHello(data){
        console.log(`${this.message}: ${data}`);
        this.emit("hello",data);
    }
}
var dialog = new Dialog();
dialog.on("hello",function(data){
    console.log("có 1 lời chào mới",data);
});
dialog.sayHello("mai Hoa");