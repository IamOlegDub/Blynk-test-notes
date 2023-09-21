import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../notesSlice';
import CommentItem from '../CommentItem/CommentItem';
import styles from './Comments.module.scss';

const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const [newCommentColor, setNewCommentColor] = useState('#000000');

    const dispatch = useDispatch();

    const notes = useSelector((state) => state.notes);

    const activeNote = notes.filter((note) => note.active);
    const activeNoteId = activeNote.length > 0 && activeNote[0].id;

    const handleAddComment = () => {
        if (newComment.trim() !== '' && activeNoteId !== null) {
            dispatch(
                addComment({
                    noteId: activeNoteId,
                    comment: newComment,
                    color: newCommentColor,
                })
            );
            setNewComment('');
            setNewCommentColor('#000000');
        }
    };

    return (
        <div className={styles.comments}>
            <h1>
                Comments #<span>{notes.length > 0 && activeNoteId}</span>
            </h1>
            <ul className={styles.comment}>
                {activeNoteId &&
                    activeNote[0].comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))}
            </ul>
            <div className={styles.form}>
                <input
                    type='color'
                    value={newCommentColor}
                    className={`${styles.formControl} ${styles.colorInput}`}
                    onChange={(e) => setNewCommentColor(e.target.value)}
                />
                <textarea
                    className={`${styles.formControl} ${styles.textInput}`}
                    placeholder='Type comment here...'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Add New</button>
            </div>
        </div>
    );
};

export default Comments;
