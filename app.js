//jshint esversion:6
const express= require('express');
const bodyParser= require('body-parser');

//set up express app
const app= express();
let items = ["yoga", "gym", "cooking"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
//get request
app.get('/',function(req,res){
 let options={
   weekday:'short',
   month:'short',
   day:'numeric',
   year:'numeric'
 }
let today= new Date();
let day=today.toLocaleDateString("en-US",options);
res.render("lists", {dayToday: day, newListItems: items});
});

//post request
app.post('/',function(req,res){
let item= req.body.newitem;
items.push(item);
   res.redirect('/');
});

//completeDay:today, this is the json object to sent back todays date with day and time as well
//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
});
