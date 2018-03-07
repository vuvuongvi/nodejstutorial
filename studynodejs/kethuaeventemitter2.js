var EventEmitter =  require("events");
var util = require("util");

function Dialog() {
    this.message = "hello world";
}
util.inherits(Dialog, EventEmitter);
Dialog.prototype.sayHello = function(data){
    console.log(this.message + ": " + data);
    this.emit("hello", data);
}
var dialog = new Dialog();
dialog.on("hello", function(data){
    console.log("một lời chào mới", data);
});
dialog.sayHello("Mai Hoa");