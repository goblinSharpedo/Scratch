//const cors = require('cors');
import cors from 'cors';
//const express = require('express');
import express from 'express';
//const mongoose = require('mongoose');
import mongoose from 'mongoose';
//const Employee = require('./employeemodel');
import Employee from './employeemodel';
const app = express();
const PORT = 3000;
// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));
app.use(express.json());
// Connect to DB
mongoose
    .connect('mongodb://localhost:27017/employeesSchema')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('DB connection failed:', err));
// Route to create a new employee
app.post('/', async (req, res) => {
    const { firstName, lastName, age, role } = req.body;
    console.log(req.body);
    const newEmployee = new Employee({ firstName, lastName, age, role });
    console.log(newEmployee);
    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch (error) {
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
//export {};
