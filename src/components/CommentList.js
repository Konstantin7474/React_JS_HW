import React, { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый коментарий" },
    { id: 2, text: "Это второй коментарий" },
    { id: 3, text: "Это третий коментарий" },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <ul>
        {comments.map((com) => (
          <li key={com.id}>
            {com.text}
            <button onClick={() => deleteComment(com.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
