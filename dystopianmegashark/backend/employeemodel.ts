// Require mongoose
// need to install types
// TypeScript is not aware of the Node.js environment and its built-in functions, including require.
// To fix this issue, you need to install the type definitions for Node.js using the command npm i --save-dev @types/node
import mongoose, { Schema, model } from 'mongoose';

type EmployeeType = {
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  avgRate?: number;
  ratings?: number[];
};

const employeeSchema = new Schema<EmployeeType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  age: { type: Number, required: true },
  avgRate: { type: Number },
  ratings: { type: [Number] },
});
// You must export your model through module.exports
// The collection name should be 'student'
const Employee = model<EmployeeType>('Employee', employeeSchema);

export default Employee;
