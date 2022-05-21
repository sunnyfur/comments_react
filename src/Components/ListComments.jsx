import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../assets/styles/Comment.module.scss";

const ListComments = () => {
  const [listComments, setListComments] = useState([]);
  const commentText = useRef(null);
  const [listCommentsStorage, setListCommentsStorage] = useLocalStorage(
    "comments",
    []
  );

  useEffect(() => {
    setListCommentsStorage(listComments);
  }, [listComments]);
  useEffect(() => {
    setListComments(listCommentsStorage);
  }, []);

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
              <div
                className={styles.comment}
                key={moment(comment.date).valueOf()}>
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
