
const express = require('express');
const dotenv = require('dotenv').config();
const Cors = require('cors');
const port = process.env.PORT || 5000;

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./connect/database');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(Cors())

app.use('/api/tasks',require('./routes/taskRoutes'));
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log("server listening on " + port))
