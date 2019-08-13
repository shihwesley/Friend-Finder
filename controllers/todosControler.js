const connection = require('../config/connection.js');

module.exports = {
  findAll: (req, res) => {
    connection.query('SELECT * FROM todos', (err, todos) => {
      res.json(todos);
    })
  },
  deleteByID: (req, res) => {
    let query = 'DELETE FROM todos WHERE id = ?;';
    connection.query(query, req.params.id, (err, todos) => {
      if (err) throw err;
      const query = 'SELECT * FROM todos WHERE id = ?';
      connection.query(query, req.params.id, (err, todos) => {
        res.json(todos);
      });
    })
  },
  findByID: (req,res) => {
    const query = 'SELECT * FROM todos WHERE id = ?';
    connection.query(query, req.params.id, (err, todos) => {
      if (todos.length === 0) {
        return res.send('This todo is either completed or does not exist!');
      }
      res.json(todos);
    })
  }
};