var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt",{
    encoding : "utf8",
    highWaterMark:16 * 1024 //16kb
});
var writable = fs.createWriteStream(__dirname + "/read2copy.txt");
var gzip = zlib.createGzip();
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz");
//chức năng copy
readable.pipe(writable);
//chức năng nén
readable.pipe(gzip).pipe(compressed);
