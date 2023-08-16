import { BsFillBookmarkFill, } from "react-icons/bs";
import { useBookMark } from "../../Context/BookmarkContext";
import { useTheme } from "../../Context/ThemeContext";
import "./Bookmark.css";

const Bookmark = () => {
  const { bookmark, bookmarkDispatch } = useBookMark();
  const { theme } = useTheme();

  return (
    <>
    <h3 className="flex-center mt-1 fs-large"> {bookmark.length>0 ? "Bookmarked Posts": "No Bookmarked yet"} </h3>
      {bookmark?.map(
        ({
          _id,
          firstName,
          lastName,
          userHandler,
          profile_photo,
          content,
          postImg,
          createDate,
          createTime,
        }) => {
          return (
              <div
                className={`margin-1 single-post-container ${
                  theme && "single-post-bg-in-dark-theme"
                } `}
                key={_id}
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

                {content && (
                  <p className="mb-1 mt-1 post-content"> {content}</p>
                )}
                {postImg && (
                  <>
                    <br />
                    <img
                      src={postImg}
                      className="user-media-img"
                      alt="media img"
                    />{" "}
                  </>
                )}

                <hr className="mt-1 mb-1" />
                  {" "}
                  <p className="flex">
                  <small className="mr-auto">Bookmarked</small>

                    {bookmark.some((el) => el._id === _id) && (
                      <span className="cursor "
                       onClick={() =>
                        bookmarkDispatch({
                          type: "REMOVE_FROM_BOOKMARK",
                          payload: { value: _id },
                        })
                      }>
                        <BsFillBookmarkFill size={18}
                         
                        />
                      </span>
                    )}
                  </p>
              </div>
          );
        }
      )}
    </>
  );
};

export { Bookmark };
