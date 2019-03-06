import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = [];

// Read the notes from local storage
const loadNotes = () => {
    const notesJson = localStorage.getItem('notes')
    try {
        return notesJson ? JSON.parse(notesJson) : [];
    } catch (error) {
        return [];
    }
}

// Save notes to local storage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Expose notes from module
const getNotes = () => notes;

// Create a note
const createNote = () => {
    const id = uuidv4();
    const timestamp = moment().valueOf();

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes();
    return id;
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((noteObject) => noteObject.id === id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
        saveNotes();
    }
}

// Sort the notes by any of the 3 ways
const sortNotes = (filters) => {
    if (filters === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (filters === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (filters === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return
    }

    if (typeof(updates.title) === 'string') {
        note.title = updates.title;
        note.updatedAt = moment().valueOf()
    }

    if (typeof(updates.body) === 'string') {
        note.body = updates.body;
        note.updatedAt = moment().valueOf();
    }
    saveNotes();
    return note;
}

notes = loadNotes();

export { getNotes, createNote, removeNote, sortNotes, updateNote }