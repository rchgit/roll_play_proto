var express = require('express');
var session = require('express-session');
var app = express();
var Database = require('arangojs');
var db = new Database('http://127.0.0.1:8529');
var rpg;
var mydb;
db.useDatabase("rpgmak");
var usercol=db.collection('users');
var story=db.collection('story');
var event=db.collection('events');
var edges=db.collection('edges');

var cet=require('./create_event_text.js');
app.use(express.static('public'));
console.log(Math.random());
app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "home_page.html" );
});


app.get('/sign_up.html',function (req, res){

res.sendFile( __dirname + "/" + 'sign_up.html');

});

app.get('/process_sign_up.html',function (req, res){
var ausername,apassword,afname,alname;
ausername=req.query.username;
apassword=req.query.password;
afname=req.query.fname;
alname=req.query.lname;
console.log('res='+usercol.byExample({'username':ausername},{count:true}).count);
if(usercol.byExample({'username':ausername}).count>0)
{
res.sendFile( __dirname + "/" + 'sign_up.html');
console.log('username is taken');
}
else
{
console.log('username is not taken');
usercol.save({username:ausername,password:apassword,fname:afname,lname:alname}, function (err, result) {
  if (err) {
    console.log('error: %j', err.message); 
  } else {
    console.log('result: %j', result._id); 
  }
});
res.sendFile( __dirname + "/" + "home.html" );
}
}
);


app.get('/home.html',function (req, res){
res.sendFile( __dirname + "/" + "home.html" );
});

app.get('/home/create/story.html',function (req,res)
{
res.sendFile( __dirname + "/" + "create_story.html" );
});
app.post('/home/story/event',function(req, res){

});

app.get('/home/story/create_event',function(req, res){
res.send(cet.data(2));
//console.log(cet.data());

});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/home/story/process_create_event',urlencodedParser,function(req, res){
var len;

var eve=db.collections('events');
var ctr;
//len=req.query['len'];
//for(ctr=0;ctr<len;ctr++){
/*
eve.save({storyname:req.body[storyname:"e"+ctr+"storyname",desc:"e"+ctr+"desc",warriorA:"e"+ctr+"warriorA",Astatwar:"e"+ctr+"Astatwar",Againwar:"e"+ctr+"Againwar",Ariskwar:"e"+ctr+"Ariskwar",Achriskwar:"e"+ctr+"Achriskwar",warriorA:"e"+ctr+"warriorA",Astatwar:"e"+ctr+"Astatwar",Againwar:"e"+ctr+"Againwar",Ariskwar:"e"+ctr+"Ariskwar",Achriskwar:"e"+ctr+"Achriskwar"+*/
//}
//




});





app.get('/home/story/homescreen',function(req, res){

});



var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
 