const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:4200'} ));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => console.log('Server started on port 3000'));

app.use('/api/sample', require('./routes/sampleRoutes'));
app.use('/api/login', require('./routes/loginRoute'));