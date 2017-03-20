module.exports = function(app, express, db, wk, email) {

  app.post('/api/home', (req, res) => {
    //
  });

  app.get('/', (req, res) => {
    res.send('Test successful');
  });

};