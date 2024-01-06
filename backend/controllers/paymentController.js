const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const { v4: uuidv4} = require('uuid')

// Process payment => /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    const { amount } = req.body;
  
    // Generate unique payment ID
    const paymentId = uuidv4();
  
    // Simulate successful payment
    const payment = {
      id: paymentId,
      amount,
      currency: 'usd',
      status: 'succeeded',
    };
  
    res.status(201).json({
      success: true,
      payment,
    });
  });