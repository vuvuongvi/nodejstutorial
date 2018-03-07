var firstFucntion = function(){
    console.log("Im first");
}
var secondFunction = function(){
    setTimeout(firstFucntion,5000);
    console.log("second function");
}
secondFunction();