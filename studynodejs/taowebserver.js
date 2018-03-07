// trang này liên quan đến index.html
var http = require("http");
var fs = require("fs"); // thư viện dùng để đọc html

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // đọc file html
    var html = fs.readFileSync(__dirname + "/index.html","utf8");
    var user = "Mai Hoa";
    html = html.replace("{user}", user);
    // trả về 1 file html
    res.end(html);
    // trả về dữ liệu json
}).listen(1337,"127.0.0.1")

