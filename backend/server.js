const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

//const employee = require('./employeeSchema');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to create a new employee
app.post('/employees', async (req, res) => {
  const { firstName, lastName, age, role } = req.body;

  const newEmployee = new employee({ firstName, lastName, age, role });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'cat-snake',
  })
  .then(() => console.log('👌👌 MongoDB connected'))
  .catch((err) => console.log('👎🏻👎🏻 MongoDB connection error:', err.message));

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`🎁🎁🎁 Server running on port ${PORT}`)
);
