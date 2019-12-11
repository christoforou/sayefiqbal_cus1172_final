let express = require('express');
let routes = require('./routes');


let pug = require("pug");

let app = express();

// configuring Pug as the template negine for this app
app.set('view engine','pug')

// registering routes
app.use('/',routes);

// Landing Page
app.get('/',function(req,res){
    res.render('index');
})
// Start a server
app.listen(3000,function(){
    console.log('Listening on port 3000!')
})