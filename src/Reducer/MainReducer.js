
const initialState = {
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
      showDetailType: null
    }
  }


const mainReducer = (state, action) => {
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
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, payload],
      };
    default:
      return state;
  }
};
export {mainReducer,initialState}
