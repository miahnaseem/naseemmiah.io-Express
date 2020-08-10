const express = require('express');
const app = express();
const path = require('path')

// app.use(bodyParser.json());
// app.use('/api/events', events.API);
// app.use('/api/forms', forms);

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.render('index');
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



app.listen(3000, () => {
  console.log('Listening on port 3000...');
});