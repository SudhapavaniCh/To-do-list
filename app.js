//jshint esversion:6

const express= require('express');
const bodyParser= require('body-parser');

//set up express app
const app= express();

app.get('/',function(req,res){

  res.setHeader('Content-Type', 'text/html');

var today= new Date();

if(today.getDay()===6||today.getDay()===0){

  res.write("<h1>Its the weekend yahhh</h1>");
}else{
  res.write('<h2>Its the weekday</h2>');
}
res.write("\n Today is : " + today);
res.send();

})
//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
})
