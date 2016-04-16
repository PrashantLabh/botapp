var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/webhook/getData', function(request, response) {
  response.send([{id: 1, productName: "Nike T-shirt"}, {id: 1, productName: "Nike T-shirt"}, {id: 1, productName: "Nike T-shirt"}])
})

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'CAAC15Jj1UgsBAAFKwLMJlJUCHJcVPYTvgM4WwDIde4aHRueZB3Go6kAaZAmZBn8ILNXX8FZCuChU5bL4tjK0xZBDkjBQ1Ttvc0a4kFAvZCHEoZBaXcgKEe13bcoZBsSvobZBodbfURMo3T28SwyfjBPs0XyXIxzRSZAVqI9DUGG5feTmRGc05nVgYsNsrJ0d7xIMWbF028HXGAOgZDZD') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
