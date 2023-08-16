import { useMainContext } from "../../Context/MainContext";
import { useTheme } from "../../Context/ThemeContext";
import { SinglePost } from "../SinglePost/SinglePost";
import "./Profile.css";
export const Profile = () => {
  const {
    dataState: { users, posts },
    dataDispatch,
  } = useMainContext();
  const { theme } = useTheme();
  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));

  const profileUserPosts = posts?.filter(
    (post) => post.username === socialUser.username
  );

  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const showFollowFollowing = (type) => {
    if (loggedInUser[type].length > 0) {
      dataDispatch({
        type: "SHOW_FOLLOW_DETAIL_MODAL",
        payload: { id: loggedInUser?.id, type },
      });
    }
  };

  return (
    <div>
      <div
        className={`margin-1 single-post-container ${
          theme && "single-post-bg-in-dark-theme"
        } `}
      >
        <section className="profile-section">
          <img
            src={loggedInUser?.profile_photo}
            alt="profile"
            className="profile-img"
          />

          <div className="ml-1 mb-1">
            <h2>
              {loggedInUser?.firstName} {loggedInUser?.lastName}
            </h2>
            <p>@{loggedInUser?.userHandler}</p>

            <p className="">{loggedInUser?.bio}</p>
          </div>

          <button
            className="ml-auto profile-edit-button"
            onClick={() => dataDispatch({ type: "SHOW_PROFILE_EDIT_MODAL" })}
          >
            Edit
          </button>
        </section>
        <section className="profile-other-information">
          <p>
            <span className="font-bold">{profileUserPosts?.length}</span> Posts
          </p>{" "}
          {"|"}
          <p onClick={() => showFollowFollowing("following")}>
            <span>{loggedInUser?.following?.length}</span> Following
          </p>
          {"|"}
          <p onClick={() => showFollowFollowing("followers")}>
            <span>{loggedInUser?.followers?.length}</span> Followers
          </p>
        </section>
      </div>

      <div className="posts">
        {[...profileUserPosts]?.reverse().map((post) => (
          <SinglePost key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};
