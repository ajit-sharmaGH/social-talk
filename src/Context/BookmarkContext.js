import { useContext, createContext, useReducer } from "react";
import { mainReducer } from "../Reducer/MainReducer";
import { success, warning } from "../Pages/Services/ToastService";
const BookMarkContext = createContext();

const BookMarkContextProvider = ({ children }) => {
  const [bookmarkState, bookmarkDispatch] = useReducer(mainReducer, {
    bookmark: [],
  });

  const addToBookmark = (item) => {
    bookmarkDispatch({
      type: "ADD_TO_BOOKMARK",
      payload: {
        value: item,
      },
    });
    success("Added to Bookmark");
  };
  const removeFromBookmark = (item) => {
    bookmarkDispatch({
      type: "REMOVE_FROM_BOOKMARK",
      payload: {
        value: item,
      },
    });
    warning("Removed From Bookmark");
  };
  return (
    <BookMarkContext.Provider
      value={{
        addToBookmark,
        removeFromBookmark,
        bookmarkState,
        bookmarkDispatch,
        bookmark: bookmarkState.bookmark,
      }}
    >
      {children}
    </BookMarkContext.Provider>
  );
};
const useBookMark = () => useContext(BookMarkContext);
export { BookMarkContextProvider, useBookMark };
