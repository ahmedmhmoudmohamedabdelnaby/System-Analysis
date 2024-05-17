const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
    {   
        title: { type: String, required: true },
        content: { type: String, required: true },
        
    },
    { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

module.exports = mongoose.model('Note', NoteSchema);
