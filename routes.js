var skills = require('./resume/skills.js')
module.exports = function(app, express, db, wk, email) {

  app.post('/api/', (req, res) => {
    var text;
    let intent = req.body.result.metadata.intentName;
    if (intent === 'skillQuery') {
      let hasSkill;
    }
    var response = {
      "speech": text,
      "displayText": text,
      "data": {},
      "contextOut": [],
      "source": "accomplish.life"
    };
  });

  app.get('/', (req, res) => {
    res.send('Test successful');
  });

};