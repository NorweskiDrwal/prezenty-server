const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', (req, res) => {
    return res.end('API working');
  });
  app.get('/list/admin', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/login', requireSignin, Authentication.signin);
  app.post('/register', Authentication.signup);
}
