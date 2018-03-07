var url = require("url");

// https://nodejs.org/dist/latest-v8.x/docs/api/url.html

var urlInfo = require('url').parse("https://www.youtube.com");
console.log(urlInfo);
var parseQuery = url.parseQueryString(true);  
console.log(parseQuery);

