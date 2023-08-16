import axios from "axios";
import { remove, success } from "../Pages/Services/ToastService";

export const createPostHandler = async (postData, token, dataDispatch) => {
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

export const likePostHandler = async (postId, token, dataDispatch) => {
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

export const dislikePostHandler = async (postId, token, dataDispatch) => {
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

export const addCommentHandler = async (
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

export const deleteCommentHandler = async (
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

export const editPostHandler = async (
  postId,
  postData,
  token,
  dataDispatch
) => {
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

export const deletePostHandler = async (postId, token, dataDispatch) => {
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
export const followUserHandler = async (
  followUserId,
  token,
  dataDispatch,
  userHandler
) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status === 200 || status === 201) {
      dataDispatch({
        type: "FOLLOWING_OPERATIONS",
        payload: { user: data.user },
      });
      dataDispatch({
        type: "ADD_FOLLOWER",
        payload: { followUser: data.followUser },
      });
      success(`you followed  ${userHandler}`)
    }
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUserHandler = async (
  followUserId,
  socialToken,
  dataDispatch
) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken,
        },
      }
    );

    if (status === 200 || status === 201) {
      dataDispatch({
        type: "FOLLOWING_OPERATIONS",
        payload: {
          user: data.user,
        },
      });
      dataDispatch({
        type: "REMOVE_FOLLOWER",
        payload: {
          unfollowedUser: data.followUser,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editUserHandler = async (userData, socialToken, dataDispatch) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.post(
      `/api/users/edit`,
      {
        userData,
      },
      {
        headers: {
          authorization: socialToken,
        },
      }
    );

    if (status === 200 || status === 201) {
      dataDispatch({ type: "USER_OPERATIONS", payload: user });
      success("User Info updated!");
    }
  } catch (error) {
    console.log(error);
  }
};
