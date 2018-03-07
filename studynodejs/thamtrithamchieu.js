// truyền giá trị nhưng a vẫn bằng 1
function changeByValue(b){
    b = 2;
}
 var a =1;
 changeByValue(a);
 console.log(a);
// truyền giá trị tham chiếu vào c khi đó nó biến đổi các obj thằng object của c
 function changeByRef(obj){
     obj.prop1 = function(){
        //do nothing
     }
     obj.newProp2 = {};
     obj.d = 100;
 }
 var c = {};
 c.prop1 = {};
 changeByRef(c);
 console.log(c);