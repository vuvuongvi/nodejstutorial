var buffer = new ArrayBuffer(8); 
var view = new Int32Array(buffer);
view[0] = 5; 
// 8 byte truyền vào mỗi byte có 4 bit 2 mảng là 8 byte r
view[1] = 10;
// view[2] = 15;
console.log(view);