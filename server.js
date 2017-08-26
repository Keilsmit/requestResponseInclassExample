var http = require('http');
  express = require('express');
  app = express();
  url = require('url');
  // server = http.createServer();



app.get('/', function(req, res) {
          res.send("hello world");
      // } else if (incomingUrl.path === '/goodbye') {
      //     res.writeHead(200, {'Content-Type': 'text/plain'});
      //     res.end('goodbye');
      // } else {
      //   res.writeHead(404,{'Content-Type': "text/plain"});
      //   res.end("Resource not found on this server");
      // }
});

app.get('/goodbye', function(req, res){
  res.send("goodbye");
});


app.listen(3000, function() {
    console.log('--Server is running--')
});
