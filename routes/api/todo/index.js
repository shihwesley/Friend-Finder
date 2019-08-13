const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   connection.query('SELECT * FROM todos', (err, todos) => {
//     res.json(todos);
//   })
// });

const todocontroller = require('../../../controllers/todosControler');

router.route('/')
  .get(todocontroller.findAll);

router.route('/:id')
  .delete(todocontroller.deleteByID)
  .get(todocontroller.findByID);


module.exports = router;