const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const path = require('path')

// app.use(bodyParser.json());
// app.use('/api/events', events.API);
// app.use('/api/forms', forms);

app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
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

app.get('*', function (_, res) { res.json({
  'index' : 'test'
  });
});

// app.get('*', (req, res) => {
//   res.render("index");
// });

// app.use('/.netlify/functions/app', router)

// module.exports.handler = serverless(app);

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
  });
