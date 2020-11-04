const express= require('express');
const bodyParser= require('body-parser');

//set up express app
const app= express();

app.get('/',function(req,res){

var today= new Date();

if(today.getDay()===6||today.getDay()===0){
  res.write('Its the weekend yahhh');
}else{
  res.write('Its the weekday');
}
res.write("\n Today is : " + today);
res.send();
res.end();
})
//create server
app.listen('3000',function(){
  console.log('Server is listening at port 3000');
})
