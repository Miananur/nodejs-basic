const http = require('http');

http.createServer((req, res)=> {
    if (req.url == '/about'){
        res.end("<h1>Welcome to about us page</h1>")
    }else if (req.url == '/cotact'){
        res.end("<h1>welcome to contact us page</h1>")
    }else{
        res.end("<h6>Hello world</h6>")
    }
}).listen(8000);