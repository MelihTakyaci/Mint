const http = require('http')
const fs = require('fs')
const port = 3050


const server = http.createServer(function(req , res){
    res.writeHead(200 , {'Content' : 'text/plain'});
    fs.readFile('./index.html', function (error , data){
        if(error){
            res.writeHead(404)
            res.write("Error")
        }else{
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(3050, function(error){
    if(error){
    console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port:', port)
    }
})
