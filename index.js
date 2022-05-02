const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:4200'} ));
app.use(bodyParser.urlencoded({extended: true}));

// Normal Code for Entry file.

app.listen(3000, () => console.log('Server started at port 3000'));


// One for adding and retriving feedbacks 
app.use('/api/sample', require('./routes/sampleRoutes.js'));
// This one for login and, retriving user data, and feedbacks according to roles.
app.use('/api/login', require('./routes/loginRoute.js'));





