require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Connect to MongoDB with connection event handlers for robustness
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', err => console.error('MongoDB connection error:', err));
db.once('open', () => console.log('MongoDB connected'));

// Root route handler for "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Student Record API');
});

// Use student routes with base path /api/students
app.use('/api/students', studentRoutes);

// Start server
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
 // console.log(`Server running on port ${PORT}`);
//});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
