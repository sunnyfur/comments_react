import { useEffect, useState } from "react";
import styles from "../assets/styles/Comment.module.scss";
const ListComments = () => {
  const [listComments, setListComments] = useState([]);
  useEffect(() => {
    const comments = localStorage.getItem("comments");
    setListComments(comments);
  }, []);

  //   console.log("список комментариев");
  return (
    <div className={styles.wrapp}>
      <div className={styles.comment}>
        {listComments.map((comment) => {
          return (
            <>
              <p className={styles.comment__date}>{comment.date}</p>
              <pre className={styles.comment__text}>{comment.text}</pre>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListComments;
