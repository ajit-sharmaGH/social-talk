import React from "react";
import "./AddComment.css";
import { addCommentHandler } from "../../../Context/PostContext";
import { useState } from "react";
import { useMainContext } from "../../../Context/MainContext";
import { useTheme } from "../../../Context/ThemeContext";
const AddComment = () => {
  const [commentText, setCommentText] = useState();
  const {
    dataState: {
      modals: { commentPostId },
    },
    dataDispatch,
  } = useMainContext();
  const { theme } = useTheme();

  const token = localStorage.getItem("token");

  const handleAddComment = () => {
    if (commentText) {
      addCommentHandler(commentPostId, commentText, token, dataDispatch);
      dataDispatch({ type: "HIDE_COMMENT_MODAL" });
    }
  };

  return (
    <div className="add-comment-container">
      <div className="add-comment-inner-section">
        <textarea
          className={`textarea-comment-space mb-1 ${
            theme && "comment-modal-in-dark-theme"
          }`}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Comment here....."
          autoFocus
        />

        <button className="post-comment cursor" onClick={handleAddComment}>
          post
        </button>

        <button
          className="discard-comment cursor"
          onClick={() => dataDispatch({ type: "HIDE_COMMENT_MODAL" })}
        >
          discard
        </button>
      </div>
    </div>
  );
};
export { AddComment };
