// Require mongoose
// need to install types
// TypeScript is not aware of the Node.js environment and its built-in functions, including require.
// To fix this issue, you need to install the type definitions for Node.js using the command npm i --save-dev @types/node

const mongoose = require('mongoose') as typeof import('mongoose');

type EmployeeType = {
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  avgRate?: number;
  ratings?: number[];
};

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  age: { type: Number, required: true },
  avgRate: { type: Number },
  ratings: { type: [Number] },
});
// You must export your model through module.exports
// The collection name should be 'student'
//const Employee = mongoose.model<EmployeeType>('Employee', employeeSchema);

module.exports = mongoose.model<EmployeeType>('Employee', employeeSchema);

export {};
