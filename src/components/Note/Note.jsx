import { useDispatch } from 'react-redux';
import { deleteNote, setActiveNote } from '../../notesSlice';
import styles from './Note.module.scss';

const Note = ({ note }) => {
    const dispatch = useDispatch();

    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id));
    };
    const handleSetActiveNote = (id) => {
        dispatch(setActiveNote(id));
    };
    return (
        <li
            className={`${styles.note} ${note.active && styles.active}`}
            onClick={() => handleSetActiveNote(note.id)}
        >
            <h3>{note.title}</h3>
            <span>{note.comments.length}</span>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </li>
    );
};

export default Note;
