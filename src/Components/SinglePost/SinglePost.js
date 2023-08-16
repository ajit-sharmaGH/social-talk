import { useMainContext } from "../../Context/MainContext";
import { useState, useEffect } from "react";
import {
  dislikePostHandler,
  deletePostHandler,
  likePostHandler,
} from "../../Context/PostContext";
import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

import {
  BsBookmark,
  BsFillBookmarkFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import "./SinglePost.css";
import { useTheme } from "../../Context/ThemeContext";
import { useNavigate } from "react-router";
import { useBookMark } from "../../Context/BookmarkContext";
import { CommentPost } from "../CommentPost/CommentPost";
const SinglePost = ({ post, showDetail }) => {
  const { theme } = useTheme();
  const { bookmark, addToBookmark, removeFromBookmark } = useBookMark();
  const navigate = useNavigate();
  const {
    dataState: { users },
    dataDispatch,
  } = useMainContext();

  const [showEditDeleteBox, setShowEditDeleteBox] = useState(false);

  const closeModal = () => {
    setShowEditDeleteBox(false);
  };

  useEffect(() => {
    if (showEditDeleteBox) {
      window.addEventListener("click", closeModal);
    }
    return () => {
      window.removeEventListener("click", closeModal);
    };
  }, [showEditDeleteBox]);

  const token = localStorage.getItem("token");

  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);
  const postUser = users?.find((el) => el.username === post?.username);

  const { firstName, lastName, profile_photo, userHandler } = postUser || {};

  const createDate = new Date(post.createdAt).toLocaleDateString();
  const createTime = new Date(post.createdAt).toLocaleTimeString();
  const handleLikeClick = () => {
    likePostHandler(post?._id, token, dataDispatch);
  };

  const handleDislikeClick = () => {
    dislikePostHandler(post?._id, token, dataDispatch);
  };
  const isUserLiked =
    loggedInUser &&
    post?.likes?.likedBy?.some(
      (user) => user.username === loggedInUser.username
    );

  const handleEditClick = () => {
    setShowEditDeleteBox(false);
    dataDispatch({ type: "POST_ID_TO_EDIT", payload: post?._id });
    dataDispatch({ type: "SHOW_POST_MODAL" });
  };
  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleDeletePost = () => {
    setShowEditDeleteBox(false);
    deletePostHandler(post?._id, token, dataDispatch);
  };
  const { content, postImg, _id } = post || {};
  const item = {
    _id,
    firstName,
    lastName,
    userHandler,
    profile_photo,
    content,
    postImg,
    createDate,
    createTime,
  };
  return (
    <>
      <div
        className={`margin-1 single-post-container ${
          theme && "single-post-bg-in-dark-theme"
        } `}
      >
        <section className="user-handle-section">
          <div className="">
            <img
              src={profile_photo}
              className="user-profile-img"
              alt="profile"
            />{" "}
          </div>
          <div>
            <p className="">
              {" "}
              <span className="mr-1 fs-large">
                {firstName} {lastName}
              </span>
              <span>@{userHandler}</span>
            </p>
            <p>
              <span className="mr-1">{createDate}</span>{" "}
              <span>{createTime}</span>{" "}
            </p>
          </div>
        </section>
        {loggedInUser?.username === post?.username && (
          <div
            className="edit-delete-icons cursor"
            onClick={() => setShowEditDeleteBox(!showEditDeleteBox)}
          >
            <BsThreeDotsVertical />
          </div>
        )}
        {showEditDeleteBox && (
          <div className="edit-delete-modal">
            <button onClick={handleEditClick}>
              <BiEdit />
              &nbsp;
              <span>Edit</span>
            </button>

            <button onClick={handleDeletePost}>
              <AiFillDelete />
              &nbsp;
              <span>Delete</span>
            </button>
          </div>
        )}
        <section onClick={() => handlePostClick(post._id)}>
          {post.content && (
            <p className="mb-1 mt-1 post-content"> {post.content}</p>
          )}
          {post?.postImg && (
            <>
              <br />
              <img
                src={post.postImg}
                className="user-media-img"
                alt="media img"
              />{" "}
            </>
          )}
        </section>

        <hr className="mb-1 mt-1" />
        <div className="single-post-icons">
          {" "}
          <p className="flex-center cursor">
            {" "}
            {isUserLiked ? (
              <AiFillHeart onClick={handleDislikeClick} size={21} />
            ) : (
              <AiOutlineHeart onClick={handleLikeClick} size={21} />
            )}
            &nbsp; <small>{post?.likes?.likeCount}</small>
          </p>
          <p
            className="flex-center cursor"
            onClick={() =>
              dataDispatch({
                type: "SHOW_COMMENT_MODAL",
                payload: {
                  commentPostId: post?._id,
                },
              })
            }
          >
            <FaRegComment size={18} />
            &nbsp;<small>{post?.comments?.length}</small>
          </p>
          <p>
            {bookmark.some((el) => el._id === item._id) ? (
              <span>
                <BsFillBookmarkFill
                  size={18}
                  onClick={() => removeFromBookmark(_id)}
                />
              </span>
            ) : (
              <span>
                <BsBookmark size={18} onClick={() => addToBookmark(item)} />
              </span>
            )}
          </p>
        </div>
        <div className="comments-container">
          {showDetail && (
            <>
              {post?.comments?.map((comment) => (
                <CommentPost
                  key={comment._id}
                  comment={comment}
                  postId={post?._id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { SinglePost };
