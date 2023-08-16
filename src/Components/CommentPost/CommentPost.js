import React from "react";
import "./CommentPost.css";
import { AiFillDelete } from "react-icons/ai";
import { deleteCommentHandler } from "../../Context/PostContext";
import { useNavigate } from "react-router";
import { useMainContext } from "../../Context/MainContext";

const CommentPost = ({ comment, postId }) => {
  const { _id, username, text } = comment;
  const navigate = useNavigate();

  const {
    dataState: { users },
    dataDispatch,
    setIsLoading,
  } = useMainContext();

  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));
  const token = localStorage.getItem("token");

  const handleUserProfile = (userHandler) => {
    navigate(`/user-profile/${userHandler}`);
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleDeleteComment = () => {
    deleteCommentHandler(postId, _id, token, dataDispatch);
  };

  const { firstName, lastName, profile_photo, userHandler } =
    users?.find((el) => el?.username === username) || {};
  return (
    <div>
      <section className="comment-section">
        <div
          onClick={() => handleUserProfile(userHandler)}
          className="cursor-pointer"
        >
          <img
            src={profile_photo}
            alt="user-profile"
            className="comment-profile-image mr-1"
          />
        </div>

        <div className="">
          <p onClick={() => handleUserProfile(userHandler)} className="fw-600">
            {firstName} {lastName}
          </p>

          <p className="comment-content">{text}</p>
        </div>

        {socialUser?.username === username && (
          <div className="mt-1 ml-auto">
            <span onClick={handleDeleteComment} className="delete-icon cursor">
              <AiFillDelete />
            </span>
          </div>
        )}
      </section>
    </div>
  );
};
export { CommentPost };
