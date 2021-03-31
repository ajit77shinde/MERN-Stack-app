const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');
const path = require('path');
var fs = require('fs');
require('dotenv').config()


// Express Route
const studentRoute = require('./routes/student.route')
const conpanyRoute = require('./routes/company.route');
const contactRoute = require('./routes/contact.route');
const userRoute = require('./routes/user.route');
const momentRoute = require('./routes/moment.rote');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)
app.use('/companys', conpanyRoute)
app.use('/contacts', contactRoute)
app.use('/users', userRoute)
app.use('/moment', momentRoute)


// PORT
console.log("process.env.PORT  = ", process.env.PORT );
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

var dir = './uploads';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
