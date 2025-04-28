import Employee from './employeemodel.ts';
import express from 'express';

const EmployeeController = {
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createStudent(req, res) {
    const { firstName, lastName, role, age } = req.body;

    Employee.create({ firstName, lastName, role, age })
      .then((newEmployee) => {
        res.status(200).json(newEmployee);
      })
      .catch((err) => {
        console.error('Error with createEmployee', err.message);
        res.status(500).json({ error: 'createEmployee failed' });
      });
  },
};
