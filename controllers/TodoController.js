const { Todo } = require('../models');

class TodoController {
  static showAll(req, res) {
    Todo.findAll()
      .then(todos => {
        res.status(200).json({
          msg: 'Fetch data success',
          todos
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static find(req, res) {
    Todo.findByPk(req.params.id)
      .then(todo => {
        if(todo) {
          res.status(200).json({
            msg: 'Fetch data success',
            todo
          })
        } else {
          res.status(404).json({
            msg: 'Data not found'
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static add(req, res) {
    const { title, description } = req.body;
    Todo.create({
      title,
      description,
      UserId: req.currentUserId
    })
      .then(() => {
        res.status(201).json({
          msg: 'Add data success'
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static delete(req, res) {
    Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.status(200).json({
          msg: `Delete todo with id ${req.params.id} success`
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static update(req, res) {
    const { title, description } = req.body;
    if(title && description) {
      Todo.update({
        title,
        description
      }, {
        where: {
          id: req.params.id
        }
      })
        .then(todo => {
          res.status(201).json({
            msg: 'Update data success',
            todo
          })
        })
        .catch(err => {
          res.status(500).json({
            msg: err
          })
        })
    } else {
      res.status(400).json({
        msg: 'Please input the title and description'
      })
    }
  }

  static updateTitle(req, res) {
    const { title } = req.body;
    if(title) {
      Todo.update({
        title
      }, {
        where: {
          id: req.params.id
        }
      })
        .then(todo => {
          res.status(201).json({
            msg: `Update todo's title with id ${req.params.id} success`,
            todo
          })
        })
        .catch(err => {
          res.status(500).json({
            msg: err
          })
        })
    } else {
      res.status(400).json({
        msg: `Please input the title`
      })
    }
  }

  static updateDescription(req, res) {
    const { description } = req.body;
    if(description) {
      Todo.update({
        description
      }, {
        where: {
          id: req.params.id
        }
      })
        .then(todo => {
          res.status(201).json({
            msg: `Update todo's description with id ${req.params.id} success`,
            todo
          })
        })
        .catch(err => {
          res.status(500).json({
            msg: err
          })
        })
    } else {
      res.status(400).json({
        msg: `Please input the description`
      })
    }
  }
}

module.exports = TodoController;