const coap    = require('coap') // or coap
    , server  = coap.createServer()

server.on('request', function(req, res) {
    if(req.method === "POST") {
        console.log(req.payload.toString());
        //console.log(req.payload[0].toString());
        res.end('Posting ' + req.payload[0] +'\n');
    }
    else {
        res.end('Hello ' + req.url.split('/')[1] + '\n');
    }    
})

server.listen(function() {
  console.log('server started')
})
