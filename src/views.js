import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'


// Generate Dom element for individual note
const generateNoteDom = (note) => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    // Setup the note title text

    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed Note';
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href', `note.html#${note.id}`)
    noteEl.classList.add('list-item');

    // Setup the status message
    statusEl.textContent = lastEdited(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl);
    return noteEl;
}

// Render notes to the screen
const renderNotes = () => {
    const notesEl = document.querySelector('#notes');
    const filters = getFilters();
    const notes = sortNotes(filters.sortBy);
    const filteredNotes = notes.filter((noteObject) => noteObject.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.textContent = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((noteObject) => {
            const noteEl = generateNoteDom(noteObject);
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage);
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#note-edit-info')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = lastEdited(note.updatedAt)
}

// generate last edited message
const lastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;

export { generateNoteDom, renderNotes, lastEdited, initializeEditPage }
