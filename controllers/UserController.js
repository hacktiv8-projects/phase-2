const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {
  static register(req, res) {
    const { username, password, role } = req.body;
    User.create({
      username,
      password,
      role
    })
      .then(user => {
        res.status(201).json({
          msg: `User regitered successfully`,
          user
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static login(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username: username
      }
    })
      .then(user => {
        if(user) {
          const verified = bcrypt.compareSync(password, user.password);
          if(verified) {
            const token = jwt.sign({ id: user.id }, process.env.SECRET);
            res.status(200).json({
              msg: `User login successfully`,
              token
            })
          } else {
            res.status(400).json({
              msg: `Username or password is wrong`
            })
          }
        } else {
          res.status(400).json({
            msg: `Username or password is wrong`
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: err.message
        })
      })
  }
}

module.exports = UserController;