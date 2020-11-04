//jshint esversion:6

const express= require('express');
const bodyParser= require('body-parser');

//set up express app
const app= express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
var today= new Date();
var currentDay=today.getDay();
var day=" ";
if(currentDay===6||currentDay===0){
day= "Weekend";
} else{
day="Weekday";
}
res.render("lists", {dayToday:day});
});


//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
});
