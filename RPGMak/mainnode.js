var express = require('express');
var session = require('express-session');
var app = express();
var Database = require('arangojs');
var db = new Database('http://127.0.0.1:8529');
var rpg;
var mydb;

var usercol=db.collection('users');

db.useDatabase("rpgmak");

app.use(express.static('public'));

app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "home_page.html" );
});


app.get('/sign_up.html',function (req, res){


if (typeof res.query!= 'undefined') {
  // ..
  res.sendFile( __dirname + "/" + "process_sign_up.html" );
}
else
{
res.sendFile( __dirname + "/" + '/sign_up.html');
}
});

app.get('/process_sign_up.html',function (req, res){
var ausername,apassword,afname,alname;
ausername=req.query.username;
apassword=req.query.password;
afname=req.query.fname;
alname=req.query.lname;


usercol.save({username:ausername,password:apassword,fname:afname,lname:alname}, function (err, result) {
  if (err) {
    console.log('error: %j', err.message); 
  } else {
    console.log('result: %j', result._id); 
  }
});




});




app.get('/home.html',function (req, res){
res.sendFile( __dirname + "/" + "home.html" );
});

app.get('/home/create/story.html',function (req,res)
{
res.sendFile( __dirname + "/" + "story.html" );
});
app.get('/home/create/event',function (req,res)
{
var option1=req.query.option;
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
 