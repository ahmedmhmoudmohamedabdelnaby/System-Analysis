const Feedback = require('../models/feedback-model');



checkServiceRunning = (req, res) => {
    res.send('Hello World! - from feedback service');
}



Addfeedback = async (req, res, next) => {
    // 1) Add product
    const feedback = await Feedback.create({
        name: req.body.name,
        email: req.body.email,
        message:req.body.message
    });
    
    
    // 3) Send response
    res.status(201).json({
        status: "success",
        message: "Feedback added successfully"
  });
};

module.exports = {
    checkServiceRunning,
    Addfeedback
}