const express = require('express');
const NoteCtrl = require('../controllers/note-ctrl');
const router = express.Router();

// Define routes for note endpoints
router.post('/notes', NoteCtrl.createNote);
router.get('/notes/:noteId', NoteCtrl.getNoteById);
router.put('/notes/:noteId', NoteCtrl.updateNote);
router.delete('/notes/:noteId', NoteCtrl.deleteNote);
router.get('/', NoteCtrl.checkServiceRunning);

module.exports = router;
