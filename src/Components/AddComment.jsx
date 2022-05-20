import styles from "../assets/styles/Comment.module.scss";

const AddComment = ({ handleClick }) => {
  console.log("Фарма комментария");

  return (
    <div className={styles.wrapp}>
      <textarea rows="5"></textarea>
      <button type="button" onClick={handleClick}>
        Добавить комментарий
      </button>
    </div>
  );
};

export default AddComment;
