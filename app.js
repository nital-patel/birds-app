const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
// to prove it worked, print to the terminal
console.log('My awesome app is listening on port 3000!');
