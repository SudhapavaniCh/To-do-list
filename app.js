//jshint esversion:6

const express= require('express');
const bodyParser= require('body-parser');

//set up express app
const app= express();

app.get('/',function(req,res){

var today= new Date();

if(today.getDay()===6||today.getDay()===0){

  res.sendFile(__dirname + "/weekend.html");
} else{

  res.sendFile(__dirname + "/weekday.html");
}

})


//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
})
