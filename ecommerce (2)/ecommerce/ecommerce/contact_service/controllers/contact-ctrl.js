const Contact = require('../models/contact-model');



checkServiceRunning = (req, res) => {
    res.send('Hello World! - from contact service');
}



Addcontact = async (req, res, next) => {
    const contact = await Contact.create({
        email: req.body.email,
        message:req.body.message
    });
    
    
    // 3) Send response
    res.status(201).json({
        status: "success",
        message: "Contact added successfully"
  });
};

module.exports = {
    checkServiceRunning,
    Addcontact
}