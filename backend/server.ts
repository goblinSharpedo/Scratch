const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const employeeRoute = require('./routes/employeeroute.ts');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', employeeRoute);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

// connect DB

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
