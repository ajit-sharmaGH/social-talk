import { createContext, useContext } from "react";
import axios from "axios";
import { remove, success, warning } from "../Pages/Services/ToastService";

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const createPostHandler = async (postData, token, dataDispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts`,
        {
          postData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
        success("Post Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likePostHandler = async (postId, token, dataDispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );


      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePostHandler = async (postId, token, dataDispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );


      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bookmarkPostHandler = async (
    postId,
    token,
    dataDispatch,
    socialUser
  ) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200 || status === 201) {
        dataDispatch({
          type: "BOOKMARK_OPERATIONS",
          payload: { bookmarks, username: socialUser.username },
        });
        success("Added To Bookmark");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeBookmarkPostHandler = async (
    postId,
    token,
    dataDispatch,
    socialUser
  ) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200 || status === 201) {
        dataDispatch({
          type: "BOOKMARK_OPERATIONS",
          payload: {
            bookmarks,
            username: socialUser.username,
          },
        });
        warning("Removed from bookmark");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCommentHandler = async (
    postId,
    commentData,
    token,
    dataDispatch
  ) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentHandler = async (
    postId,
    commentId,
    token,
    dataDispatch
  ) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPostHandler = async (postId, postData, token, dataDispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/edit/${postId}`,
        {
          postData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
        success("Post Edited");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostHandler = async (postId, token, dataDispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 200 || status === 201) {
        dataDispatch({ type: "POST_OPERATIONS", payload: posts });
        remove("Post Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        createPostHandler,
        deletePostHandler,
        editPostHandler,
        deleteCommentHandler,
        addCommentHandler,
        likePostHandler,
        dislikePostHandler,
        removeBookmarkPostHandler,
        bookmarkPostHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostContextProvider, usePost };
