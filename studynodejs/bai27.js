var obj = {
    sayHello: "hello"
}
// khai báo bằng 2 cách
console.log(obj.sayHello);
console.log(obj['sayHello']);

//khai báo bằng biến
var prop = "sayHello";
console.log(obj[prop]);

//function và arr

var arr = [];
arr.push(function(){
    console.log("Hello Nodejs");
});
arr.push(function(){
    console.log("Hello Nodejs");
});

arr.push(function(){
    console.log("Hello Nodejs");
});

arr[0]();
arr[1]();
arr[2]();
console.log("=====");
// sử dụng vòng lặp for
arr.forEach(function (item) {
    item();
});


