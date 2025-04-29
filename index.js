const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json()); // For parsing JSON bodies

// MongoDB Connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes (API Endpoints)
app.get('/', (req, res) => {
    res.send('Welcome to the E-store API!');
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
