const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("url of remaining route are type a url bar as /about or /contact")
        res.end()

    }
    else if(req.url==="/about"){
        res.write("about page");
        res.end()
    }
    else if(req.url==="/contact"){
        res.write("contact page")
        res.end()
    }
   
});
server.listen(3001);