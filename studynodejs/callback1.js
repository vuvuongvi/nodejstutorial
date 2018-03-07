function readDatabase(callback){
    // read done
    var user = {
        name: "mai hoa"
    }
    callback(user);
}
// yeu câu truy van du lieu
readDatabase(function (data) {
    console.log("Read done callback");
    console.log("data:", data);
});
// nơi khác
readDatabase(function(data) {
    console.log("read done callback2");
    console.log("User Name", data.name);
});