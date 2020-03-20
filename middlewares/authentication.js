const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  const acces_token = req.headers.token;
  if(acces_token) {
    const authenticated = jwt.verify(acces_token, process.env.SECRET);
    if(authenticated) {
      req.currentUserId = authenticated.id;
      // find disini
      next();
    } else {
      res.status(400).json({
        msg: `Access token invalid`
      })
    }
  } else {
    res.status(400).json({
      msg: `Access token not found`
    })
  }
}