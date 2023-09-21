import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, setActiveNote } from '../../notesSlice';
import Note from '../Note/Note';
import styles from './Notes.module.scss';

const Notes = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            dispatch(addNote(newNote));
            setNewNote('');
        }
    };

    useEffect(() => {
        const isActive = notes.find((item) => item.active);
        if (!isActive && notes.length > 0) {
            dispatch(setActiveNote(notes[notes.length - 1].id));
        }
    }, [notes, dispatch]);

    return (
        <div className={styles.notes}>
            <h1>Items</h1>
            <div className={styles.formNoteAdd}>
                <input
                    type='text'
                    placeholder='Type name here...'
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    required
                />
                <button onClick={handleAddNote}>Add New</button>
            </div>
            <ul>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
        </div>
    );
};

export default Notes;
