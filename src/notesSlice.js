import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('notes')) || [];

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push({
                id: Date.now().toString().slice(-8),
                title: action.payload,
                comments: [],
                active: false,
            });
            localStorage.setItem('notes', JSON.stringify(state));
        },
        deleteNote: (state, action) => {
            const newState = state.filter((note) => note.id !== action.payload);
            state.length = 0;
            state.push(...newState);
            localStorage.setItem('notes', JSON.stringify(state));
        },
        addComment: (state, action) => {
            const { noteId, comment, color } = action.payload;
            const note = state.find((note) => note.id === noteId);
            if (note) {
                note.comments.push({
                    id: note.id + Date.now().toString().slice(-6),
                    text: comment,
                    color,
                });
                localStorage.setItem('notes', JSON.stringify(state));
            }
        },
        setActiveNote: (state, action) => {
            state.forEach((note) => {
                if (note.id === action.payload) {
                    note.active = true;
                } else {
                    note.active = false;
                }
            });
            localStorage.setItem('notes', JSON.stringify(state));
        },
    },
});

export const { addNote, deleteNote, addComment, setActiveNote } =
    notesSlice.actions;

export default notesSlice.reducer;
