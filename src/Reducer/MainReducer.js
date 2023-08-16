export const initialState = {
  posts: [],
  users: [],
  postIdToBeEdit: null,
  modals: {
    showPostModal: false,
    showCommentModal: false,
    commentPostId: null,
    showProfileEditModal: false,
    showFollowDetailModel: false,
    showFollowDetailId: null,
    showDetailType: null,
  },
};

export const mainReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_POSTS":
      return {
        ...state,
        posts: payload,
      };
    case "INITIALIZE_USERS":
      return {
        ...state,
        users: payload,
      };
    case "POST_OPERATIONS":
      return {
        ...state,
        posts: payload,
      };
    case "ADD_TO_BOOKMARK":
      return {
        ...state,
        bookmark: [...state.bookmark, action.payload.value],
      };

    case "REMOVE_FROM_BOOKMARK":
      return {
        ...state,
        bookmark: state.bookmark.filter(
          (data) => data._id !== action.payload.value
        ),
      };
    case "USER_OPERATIONS":
      return {
        ...state,
        users: state.users.map((user) =>
          payload.username === user.username ? payload : user
        ),
      };

    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, payload],
      };

    case "POST_ID_TO_EDIT":
      return {
        ...state,
        postIdToBeEdit: payload,
      };
    case "CLEAR_ID_TO_EDIT":
      return {
        ...state,
        postIdToBeEdit: null,
      };
    case "SHOW_POST_MODAL":
      return {
        ...state,
        modals: { ...state.modals, showPostModal: true },
      };

    case "HIDE_POST_MODAL":
      return {
        ...state,
        modals: { ...state.modals, showPostModal: false },
      };
    case "SHOW_COMMENT_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          showCommentModal: true,
          commentPostId: action?.payload?.commentPostId,
        },
      };

    case "HIDE_COMMENT_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          showCommentModal: false,
          commentPostId: null,
        },
      };

    default:
      return state;
  }
};
