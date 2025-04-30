const express = require('express');
const employeeController = require('../controllers/employeecontroller');
const router = express.Router();

router.post('/employees', employeeController.submitEmployee, (req, res) => {
  //console.log('Submit employee success at /employee/👌');
  res.status(200).json(res.locals.employeeNew);
});

module.exports = router;
