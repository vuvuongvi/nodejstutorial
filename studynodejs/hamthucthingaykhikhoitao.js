// đây là hàm thực thi ngay khi khởi tao
(function(){
    var firstName = "Hoa";
    console.log(firstName);
    
}());
var firstName = "Mai";
console.log(firstName);
// hàm thực thi khi khởi tạo 2
(function(lastName){
 console.log(lastName);
}("Phượng"));
