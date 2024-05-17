const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = new Schema(
    {
        name: {type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
      // You can add more fields here if needed
    },
    { timestamps: true }
);

// module.exports = mongoose.model('feedback', feedbackSchema)
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;