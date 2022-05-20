import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import moment from "moment";

import styles from "../assets/styles/Comment.module.scss";
const ListComments = () => {
  const [listComments, setListComments] = useState([]);
  const commentText = useRef(null);
  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    setListComments(comments);
  }, []);

  //   console.log("список комментариев");

  const handleClick = () => {
    const comm = {
      date: moment(),
      text: commentText.current.value,
    };
    console.log(listComments);
    const newList = [comm, ...listComments];

    console.log(newList);
    setListComments(newList);
    commentText.current.value = "";
    localStorage.setItem("comments", JSON.stringify(newList));
  };
  return (
    <>
      <div className={styles.wrapp}>
        <textarea rows="5" ref={commentText}></textarea>
        <button type="button" onClick={handleClick}>
          Добавить комментарий
        </button>
      </div>
      <div className={styles.wrapp}>
        {listComments.length > 0 ? (
          listComments.map((comment) => {
            return (
              <div className={styles.comment} key={comment.date}>
                <Moment
                  format="DD.MM.YYYY HH:mm"
                  className={styles.comment__date}>
                  {comment.date}
                </Moment>
                <pre className={styles.comment__text}>{comment.text}</pre>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ListComments;
