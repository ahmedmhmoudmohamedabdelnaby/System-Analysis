const Note = require('../models/note-model');

// Get Note by ID
getNoteById = async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const note = await Note.findById(noteId);
        if (!note) {
            return res.status(404).json({ success: false, error: 'Note not found' });
        }
        return res.status(200).json({ success: true, data: note });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// Create Note
createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        await note.save();
        return res.status(201).json({ success: true, data: note });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// Update Note by ID
updateNote = async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(noteId, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ success: false, error: 'Note not found' });
        }
        return res.status(200).json({ success: true, data: updatedNote });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// Delete Note by ID
deleteNote = async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const deletedNote = await Note.findByIdAndDelete(noteId);
        if (!deletedNote) {
            return res.status(404).json({ success: false, error: 'Note not found' });
        }
        return res.status(200).json({ success: true, data: deletedNote });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

// Function to check if service is running
checkServiceRunning = (req, res) => {
    res.send('Hello World! - from note service.');
};

module.exports = {
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    checkServiceRunning
};
