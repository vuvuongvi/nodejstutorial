// tạo 1 web api trả về dữ liệu json
var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    if(req.url === "/"|| req.url === "/index.html"){
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if(req.url === "/api"){
    res.writeHead(200, { 'Content-Type':'application/json' });
    var obj = {
        firstName: "Hoa",
        lastName: "Hoa"
    }

    // chuyển đổi kiểu json sang string
    res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end("Not found");
    }
}).listen(1337,"127.0.0.1", function(){
    // cái function callback này là khi cái server chạy đc rồi thì mình xuất ra dòng console.log
    console.log("Server listening on: http://localhost:1337");
})