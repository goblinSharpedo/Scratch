// Require mongoose
// need to install types
// TypeScript is not aware of the Node.js environment and its built-in functions, including require.
// To fix this issue, you need to install the type definitions for Node.js using the command npm i --save-dev @types/node
const mongoose = require('mongoose');
const { Schema } = mongoose;


const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {type: String, required: true},
  age: { type: Number, required: true},
  avgRate: { type: Number, required: false },
  ratings: { type: Array, required: false }
});
// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('employee', employeeSchema);

const num = 5;
function add(3)
// You must export your model through module.exports
