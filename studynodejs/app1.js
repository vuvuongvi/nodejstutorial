var Emitter = require("events");
var Config = require("./config").events;
// muốn bắt sự kiện phải khởi tạo 1 biến để quản lí
var emitter = new Emitter();
emitter.on(Config.BAD_SCORE, function() {
    console.log("Một môn nào đó bị điểm kém");
});
emitter.on(Config.BAD_SCORE,function(){
    console.log("Đã điểm kém,cần cải thiện");
});

var scores = [10,4];
 for(var s of scores){
     if(s < 5){
         console.log("Điểm thấp quá", s);
         emitter.emit(Config.BAD_SCORE);
     }
 }