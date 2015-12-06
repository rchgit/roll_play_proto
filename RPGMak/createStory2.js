var express = require('express');
var session = require('express-session');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
});
app.get('/signup',function (req, res){
});
app.post('/process'



app.get('/login.html',function (req, res){
});




app.get('/home/create/story',function (req,res)
{
});
app.get('/home/create/event',function (req,res)
{
});
app.get('/home/story/homescreen',function(req, res){

});
app.get('/home/story/event',function(req, res){

});


var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
 