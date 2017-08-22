const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.get('/', function(req,res){
  res.send('HELLOoOOOoOOoOOOooO');
});



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





app.use(require('./routes/birds.js'));





app.listen(port);
// to prove it worked, print to the terminal
console.log('My awesome app is listening on port 3000!');
