import styles from './CommentItem.module.scss';

const CommentItem = ({ comment }) => {
    return (
        <li className={styles.card}>
            <div
                className={styles.commentColor}
                style={{ backgroundColor: comment.color }}
            ></div>
            <div>{comment.text}</div>
        </li>
    );
};

export default CommentItem;
