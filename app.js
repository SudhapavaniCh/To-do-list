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
switch (currentDay) {
    case 0:
      day="Sunday";
      break;
    case 1:
      day="Monday";
      break;
    case 2:
      day="Tuesday";
      break;
    case 3:
      day="Wednesday";
      break;
    case 4:
      day="Thursday";
      break;
    case 5:
      day="Friday";
      break;
    case 6:
      day="Saturday";
      break;
    default:
      day="Not a day";
}
res.render("lists", {dayToday:day});
});
//completeDay:today, this is the json object to sent back todays date with day and time as well
//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
});
