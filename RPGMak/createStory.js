var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
console.log('host :'+req.hostname);
console.log('url :'+req.baseUrl);
console.log('request: '+req.protocol);
console.log('cont '+req.get('Content-Type'));
 res.format({
 
 'text/plain': function(){
 console.log('hey');
 res.send('hey');
 
 },
 'text/html': function(){
 res.send('hey2');
  console.log('hey2');
 },
 'application/json': function(){
 res.send({ message: 'hey3' });
 },
 'default': function() {
 // log the request and respond with 406
 res.status(406).send('Not Acceptable');
 }
});
})
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/', urlencodedParser, function (req, res) {
// Prepare output in JSON format
console.log('cont '+req.get('content-type'));
console.log('a '+req.query.a);
console.log('val '+req.body.val);
})


app.get('/doc1.html', function (req, res) {
console.log('host :'+req.hostname);
console.log('url :'+req.baseUrl);
console.log('request: '+req.protocol);
console.log('cont '+req.get('content-type'));
console.log('path '+req.path);
 console.log('request: '+req.protocol);
res.send(req.get('content-type'));

})
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
 