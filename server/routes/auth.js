const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateTicketNumber, generateQRCode } = require('../utils/ticketing');

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    console.log('Registration request received:', req.body);
    
    const {
      fullName,
      phoneNumber,
      email,
      alxAffiliation,
      teamStatus,
      strengths,
      roleType
    } = req.body;

    // Validate required fields
    if (!fullName || !phoneNumber || !email || !alxAffiliation || !teamStatus || !strengths || !roleType) {
      console.log('Missing required fields:', { fullName, phoneNumber, email, alxAffiliation, teamStatus, strengths, roleType });
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already registered with this email' });
    }

    // Generate ticket number and QR code
    const ticketNumber = generateTicketNumber();
    console.log('Generated ticket number:', ticketNumber);
    
    const qrCode = await generateQRCode(JSON.stringify({ ticketNumber }));
    console.log('Generated QR code');

    // Create new user
    const user = new User({
      fullName,
      phoneNumber,
      email,
      alxAffiliation,
      teamStatus,
      strengths,
      roleType,
      ticketNumber,
      qrCode
    });

    await user.save();
    console.log('User saved successfully:', user._id);

    // For now, just return success without sending email
    res.status(201).json({
      message: 'Registration successful',
      user: {
        fullName,
        email,
        ticketNumber,
        qrCode
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

module.exports = router;
