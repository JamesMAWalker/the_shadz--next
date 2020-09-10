const next = require('next');
const express = require('express')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/shop/:name', (req, res) => {
    app.render(req, res, "/product", { name: req.params.name })
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(process.enve.PORT || 3030, err => {
    if (err) throw err;
    console.log('> Now serving THESHADZ on localhost 3030');
  })

});
