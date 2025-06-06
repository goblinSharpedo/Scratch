const express = require('express');
const mongoose = require('mongoose');
const employee = require('./models/employeeSchema');

const app = express();
const PORT = 3000; 

// Middleware
app.use(express.json());

// Connect to DB
mongoose.connect('mongodb://localhost:27017/employeesSchema')
.then(() => console.log('Connected to DB'))
.catch((err) => console.error('DB connection failed:', err));

// Route to create a new employee
app.post('/employees', async (req, res) => {
  const { firstName, lastName, age,  role } = req.body;

  const newEmployee = new employee({ firstName, lastName, age, role });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// post request to add rating 
// post (req, res)
// {rating} = req.body
// if ( !1-10){}
// res.status(400) rating needs to be 1-10
// updatedemployee = employee.findOne(name? ID?)
// updatedemployee.rating.push(rating)
// res.json(avgrat) <-- calculated in DB
// catch error 

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});