const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
     res.write( '<h1>Hello Node!!!!</h1>\n')
     res.end()
    }})
    
    const PORT = 5000;
    server.listen(3000)