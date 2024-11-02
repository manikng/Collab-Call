const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// API Endpoints

// Register User (for testing purposes)
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({ email, password: hashedPassword });
  await user.save();
  
  res.status(201).send('User registered');
});

// Login User
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Get Projects (mock data)
let projects = [];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Create Project
app.post('/api/projects', (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));