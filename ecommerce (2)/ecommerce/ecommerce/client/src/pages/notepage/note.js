import React, { useState, useEffect } from "react";
import { createNote, getNoteById, updateNote, deleteNote } from "../../api";
import "./note.css"

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNoteId, setEditingNoteId] = useState(null);

  // Function to fetch all notes
  const fetchNotes = async () => {
    try {
      const response = await fetchNotes();
      setNotes(response.data.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to handle input change in the new note form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  // Function to submit a new note
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createNote(newNote);
      setNewNote({ title: "", content: "" });
      fetchNotes();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  // Function to handle edit button click
  const handleEditClick = async (noteId) => {
    try {
      const response = await getNoteById(noteId);
      const { title, content } = response.data.data;
      setNewNote({ title, content });
      setEditingNoteId(noteId);
    } catch (error) {
      console.error("Error fetching note for editing:", error);
    }
  };

  // Function to handle update button click
  const handleUpdateClick = async () => {
    try {
      await updateNote(editingNoteId, newNote);
      setNewNote({ title: "", content: "" });
      setEditingNoteId(null);
      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Function to handle delete button click
  const handleDeleteClick = async (noteId) => {
    try {
      await deleteNote(noteId);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="labelogin">Notes</h1>
      <form 
      className="form"
      onSubmit={editingNoteId ? handleUpdateClick : handleSubmit}>
        <input
        className="input"
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
        className="textarea"
          name="content"
          value={newNote.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
        />
        <button type="submit"
        className="submit">
          {editingNoteId ? "Update Note" : "Create Note"}
        </button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <div>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => handleEditClick(note._id)}>Edit</button>
              <button onClick={() => handleDeleteClick(note._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotePage;
