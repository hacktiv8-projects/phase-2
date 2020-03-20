const { Todo } = require('../models');
module.exports = (req, res, next) => {
  Todo.findByPk(req.params.id)
    .then(todo => {
      if(req.currentUserId === todo.UserId) {
        next()
      } else {
        res.status(401).json({
          msg: `You're not authorized to take make this request`
        })
      }
    })
    .catch(err => {
      res.status(404).json({
        msg: `Data not found`
      })
    })
}