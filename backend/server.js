const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

// MongoDB URI directly defined here
const mongoURI = 'mongodb+srv://simran01:1234321@cluster0.46lh5.mongodb.net/?retryWrites=true&w=majority&appName=cluster0';

// Connect to MongoDB
connectDB(mongoURI);

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
