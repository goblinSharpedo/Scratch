const { Employee } = require('./employeemodel');
const express = require('express');

const EmployeeController = {
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createEmployee(req: Express.Request, res: Express.Response) {
    const { firstName, lastName, role, age } = req.body;

    Employee.create({ firstName, lastName, role, age })
      .then((newEmployee) => {
        res.sendStatus(200).json(newEmployee);
      })
      .catch((err: Error) => {
        console.error('Error with createEmployee', err.message);
        res.status(500).json({ error: 'createEmployee failed' });
      });
  },
};

module.exports = EmployeeController;

export {};
