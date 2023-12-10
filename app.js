
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Node',
    nombre: 'Johannes Valdiviezo',
  });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Node',
        nombre: 'Johannes Valdiviezo',
      });
});
  
app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Node',
        nombre: 'Johannes Valdiviezo',
      });
});
  
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo con su respetiva ruta');
});
  
app.get('*', (req, res) => {
    res.render('404', {
        titulo: 'Node',
        nombre: 'Johannes Valdiviezo',
      });
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})