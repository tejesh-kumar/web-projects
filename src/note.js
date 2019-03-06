import { initializeEditPage, lastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleInput = document.querySelector('#note-title');
const bodyInput = document.querySelector('#note-body');
const editInfo = document.querySelector('#note-edit-info');
const removeInput = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleInput.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    editInfo.textContent = lastEdited(note.updatedAt);
})

bodyInput.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    editInfo.textContent = lastEdited(note.updatedAt);
})

removeInput.addEventListener('click', (e) => {
    removeNote(noteId);
    location.assign(`index.html`);
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId);
    }
})