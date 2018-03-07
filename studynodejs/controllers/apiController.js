
module.exports = function (app) {
    app.get("/api/user/id", function(){
        //get data from database
        var result = {
            firstName: "Mai",
            lastName: "Hoa"
        };
        res.json(result);
    });
    app.post("",  function (req, res) {
        // tạo mới và save dữ liệu
        console.log("s");
    });
    app.put("",  function (req, res) {
        // cập nhất và lưu cơ sở dữ liệu
        console.log("s");       

    });
    app.delete("", function (req, res) {
        //delete user from database
        console.log("s");
    });
}