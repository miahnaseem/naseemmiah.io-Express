const express = require('express');
const serverless = require("serverless-http")
const app = express();
const router = express.Router();
const path = require('path')

// app.use(bodyParser.json());
// app.use('/api/events', events.API);
// app.use('/api/forms', forms);

// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
  // res.render('index');
  res.json({
    'hello': 'test'
  });
});

app.get('/home', (req, res) => {
  res.render('index');
 });

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
 });

 app.get('/contact', (req, res) => {
  res.render('contact');
 });
 
 app.get('/about', (req, res) => {
  res.render('about');
 });

app.use('/.netlify/functions/app', router)


module.exports.handler = serverless(app);