const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5174', // Allow frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/devlabs')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Community Member Schema
const communityMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  domain: { type: String, required: true },
  experience: { type: String, required: true },
  interests: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CommunityMember = mongoose.model('CommunityMember', communityMemberSchema);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Routes
app.post('/api/join-community', async (req, res) => {
  console.log('Received join community request:', req.body);
  try {
    const member = new CommunityMember(req.body);
    await member.save();
    console.log('Successfully saved member:', member);
    res.status(201).json({ message: 'Successfully joined the community!', member });
  } catch (error) {
    console.error('Error saving member:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already registered' });
    } else {
      res.status(500).json({ message: 'Error joining community', error: error.message });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
}); 