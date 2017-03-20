var skills = require('./resume/skills.js')
module.exports = function(app, express, db, wk, email) {

  app.post('/api/', (req, res) => {
    var text = "I'm not hitting anything";
    let intent = req.body.result.metadata.intentName;
    if (intent === 'skillQuery') {
      let skill = req.body.result.parameters.skill;
      let hasSkill = skills.includes(skill);
      if (hasSkill) {
        text = `Yes! Andrew does have experience with ${skill}.`
      } else {
        text = `No. Andrew hasn't had the opportunity to use ${skill} yet.`
      }
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