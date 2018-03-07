// emitter.js

function Emitter() {
    this.events = {};
}
// kiểm tra events[type] ,nếu có trả ra [type] hoặc là rỗng
Emitter.prototype.on = function(type,listener){
    // kiểm tra trong sự kiện có type hoặc rỗng không,nếu có type thì đẩy sự kiện listener ra
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
Emitter.prototype.emit =function(){
    // nếu có sự kiện type thì duyệt từng phần tử của mảng forEeach(listener) là duyệt phần tử
    if(this.events[type]){
        this.events[type].forEeach(function(listener){
            listener(); // duyệt mảng và gọi hàm
        })
    }
}
module.exports = Emitter;