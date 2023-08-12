import { useNavigate } from "react-router";
import { useMainContext } from "../../Context/MainContext";
import { useState, useEffect } from "react";
import { usePost } from "../../Context/PostContext";

import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import {
  BsBookmark,
  BsFillBookmarkFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import "./SinglePost.css";
import { useTheme } from "../../Context/ThemeContext";
const SinglePost = ({ post, showDetail }) => {
  const { theme } = useTheme();
  const {
    dataState: { users, posts },
    dataDispatch,
  } = useMainContext();
  const navigate = useNavigate();
  const [showEditDeleteBox, setShowEditDeleteBox] = useState(false);
  const {
    likePostHandler,
    dislikePostHandler,
    bookmarkPostHandler,
    removeBookmarkPostHandler,
    deletePostHandler,
  } = usePost();

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

  const socialUsers = JSON.parse(localStorage.getItem("users"));
  const loggedInUser = users.find((el) => el.username === socialUsers.username);
  const postUser = users.find((el) => el.username === post.username);

  const { firstName, lastName, profile_photo, userHandler } = postUser || {};

  const createDate = new Date(post.createdAt).toLocaleDateString();
  const createTime = new Date(post.createdAt).toLocaleTimeString();

  const handlePostLike = () => {
    likePostHandler(post?._id, token, dataDispatch);
  };

  const handlePostDislike = () => {
    dislikePostHandler(post?._id, token, dataDispatch);
  };

  // const handlePostClick = (postId) => {
  //   navigate(`/post/${postId}`);
  // };

  const handleBookmarkClick = () => {
    bookmarkPostHandler(post?._id, token, dataDispatch, loggedInUser);
  };

  // const handleRemoveBookmark = () => {
  //   removeBookmarkPostHandler(
  //     post?._id,
  //     token,
  //     dataDispatch,
  //     loggedInUser
  //   );
  // };

  // const handleUserProfile = (userHandler) => {
  //   if (userHandler === loggedInUser?.userHandler) {
  //     navigate(`/profile`);
  //   } else {
  //     navigate(`/user-profile/${userHandler}`);
  //   }
  // };
  // if(!loggedInUser || !loggedInUser.username){
  //   return null;
  // }

  const isUserLiked =
    loggedInUser &&
    post?.likes?.likedBy?.some(
      (user) => user.username === loggedInUser.username
    );

  const isBookMarked = loggedInUser?.bookmarks?.includes(post?._id);

  const handleEditClick = () => {
    setShowEditDeleteBox(false);
    // dataDispatch({ type: "POST_ID_TO_EDIT", payload: post?._id });
    // dataDispatch({ type: "SHOW_POST_MODAL" });
  };

  const handleDeletePost = () => {
    setShowEditDeleteBox(false);
    deletePostHandler(post?._id, token, dataDispatch);
  };

  return (
    <div
      className={`margin-1 single-post-container ${
        theme && "single-post-bg-in-dark-theme"
      } `}
    >
      <section className="user-handle-section">
        <div className="">
          <img src={profile_photo} className="user-profile-img" alt="profile" />{" "}
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
            <span className="mr-1">{createDate}</span> <span>{createTime}</span>{" "}
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
      <section>
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
        <p className="flex-center">
          {" "}
          {isUserLiked ? (
            <AiFillHeart onClick={handlePostDislike} />
          ) : (
            <AiOutlineHeart onClick={handlePostLike} />
          )}
          &nbsp; <small>{post.likes.likeCount} </small>
        </p>
        <FaRegComment /> <AiOutlineShareAlt /> <BsBookmark />{" "}
      </div>
    </div>
  );
};

export { SinglePost };
