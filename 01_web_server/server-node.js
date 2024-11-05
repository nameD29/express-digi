const http = require('http')

//local host
const hostname = '127.0.0.1';

// locat port

const port = 3000

const server = http.createServer((req,res) => {

    if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type' ,'text/plain');
    res.end("hello ice treat but why?")
    }
    else if(req.url === '/ice-tea'){
        res.statusCode = 200;
    res.setHeader('Content-Type' ,'text/plain');
    res.end("why you drink ice tea isnt it cold enough")
    }
    else{
        res.statusCode = 404;
    res.setHeader('Content-Type' ,'text/plain');
    res.end("Im gonna say that your 404 not found");
    }
})

server.listen(port,hostname, () => {
console.log(`server is listening on at http: ${hostname}:${port}`)
})