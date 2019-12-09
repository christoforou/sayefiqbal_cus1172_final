let express = require('express');
let routes = require('./routes');
const path = require('path');


let pug = require("pug");

let app = express();


app.set('view engine','pug')

app.use('/',routes);
// 
app.get('/home',function(req,res){
    res.render('index');
})
// Start a server
app.listen(3000,function(){
    console.log('Listening on port 3000!')
})