const fs = require('fs')
fs.writeFile('./welcome.txt','Hello Node' ,'utf-8' ,(err,data)=> {
    console.log('welcome.txt'); 
}
)
fs.readFile('./hello.txt','utf-8',(err,data)=>{
    console.log(data);
})
