const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbHelp = require('./db');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.get('/', (req, res) => {
  res.send('Home page...');
});

const speakersRoute = require('./routes/speakers');
const lecturesRoute = require('./routes/lectures');
const usersRoute = require('./routes/users');

//middleware functions
app.use('/speakers', speakersRoute);
app.use('/lectures', lecturesRoute);
app.use('/users', usersRoute);

dbHelp.connectDB(() => {
  app.listen(port, () => console.log('Server is listening...'));
});
