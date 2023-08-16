import { MdOpenInNew } from "react-icons/md";
import "./Home.css";
import { useState, useEffect } from "react";
import { BiImageAdd, BiTrendingUp } from "react-icons/bi";
import { useMainContext } from "../../Context/MainContext";
import { SinglePost } from "../SinglePost/SinglePost";
import { useTheme } from "../../Context/ThemeContext";
import { createPostHandler } from "../../Context/PostContext";
import { IoMdRemoveCircle } from "react-icons/io";
import { warning } from "../../Pages/Services/ToastService";
import { v4 as uuid } from "uuid";
const Home = () => {
  const {
    dataState: { posts, users },
    dataDispatch,
  } = useMainContext();
  const { theme } = useTheme();
  const [postsType, setPostsType] = useState("latest");
  const [postData, setPostData] = useState("");
  useEffect(() => {
    setPostData({
      _id: uuid(),
      content: "",
      comments: [],
      postImg: "",
    });
  }, []);
  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setPostData((prev) => ({
      ...prev,
      postImg: URL.createObjectURL(selectedImg),
    }));
  };

  const loggedInUserPosts = posts?.filter(
    (post) => post?.username === loggedInUser?.username
  );

  const homePosts = posts?.filter((post) =>
    loggedInUser?.following?.some((el) => el.username === post.username)
  );

  const likedPostsByUsers = posts?.filter(
    (post) =>
      loggedInUser?.following?.some((el) => el?.username === post?.username) ||
      loggedInUser?.username === post?.username
  );

  const postsByLikedCount = likedPostsByUsers?.sort(
    (a, b) => b?.likes?.likeCount - a?.likes?.likeCount
  );

  const postsByUsers =
    postsType === "latest"
      ? [...loggedInUserPosts, ...homePosts].sort(
          (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
        )
      : postsType === "oldest"
      ? [...loggedInUserPosts, ...homePosts].sort(
          (a, b) => new Date(a?.createdAt) - new Date(b?.createdAt)
        )
      : postsByLikedCount;

  const handleRemoveFile = () => {
    setPostData((prev) => ({ ...prev, postImg: "" }));
  };
  const token = localStorage.getItem("token");

  const handlePostClick = () => {
    if (postData.content) {
      createPostHandler(postData, token, dataDispatch);
      setPostData((prev) => ({ ...prev, content: "", postImg: "" }));
    } else {
      warning("Add Content!");
    }
  };

  return (
    <div>
      <div className={`home-tabs-container ${theme && "home-tabs-dark-mode"}`}>
        <button
          onClick={() => setPostsType("latest")}
          className={`flex-center ${
            postsType === "latest" && "active-tabs-styling"
          }`}
        >
          <MdOpenInNew size={18} />
          &nbsp;
          <span>Latest</span>
        </button>

        <button
          onClick={() => setPostsType("oldest")}
          className={`flex-center ${
            postsType === "oldest" && "active-tabs-styling"
          }`}
        >
          <span>Oldest</span>
        </button>

        <button
          onClick={() => setPostsType("trending")}
          className={`flex-center ${
            postsType === "trending" && "active-tabs-styling"
          }`}
        >
          <BiTrendingUp size={18} className="trending-icon" />
          &nbsp;
          <span>Trending</span>
        </button>
      </div>
      <div
        className={`${
          theme
            ? "posting-bg-in-dark-theme textarea-container"
            : "posting-bg-in-light-theme textarea-container"
        }`}
      >
        <textarea
          type="text"
          name="post"
          className={`textarea-space mb-1`}
          placeholder="What is happening...."
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, content: e.target.value }))
          }
          value={postData?.content}
        />
        <span>
          <img
            src={loggedInUser?.profile_photo}
            className="home-profile-image"
            alt="user-img"
          />
        </span>
        <label htmlFor="uploading-images">
          <span className="file-icon">
            <BiImageAdd size={30} />
          </span>
        </label>
        <input
          id="uploading-images"
          type="file"
          className="input-file-type"
          onChange={handleImageUpload}
        />
        {postData?.postImg && (
          <div className="uploading-image-container">
            <img src={postData.postImg} alt="" className="uploading-image" />
            <span
              onClick={handleRemoveFile}
              className="remove-uploading-image cursor"
            >
              <IoMdRemoveCircle size={28} />
            </span>
          </div>
        )}
        <button className={`add-post-button cursor`} onClick={handlePostClick}>
          Post
        </button>
      </div>

      {postsByUsers?.length > 0 && (
        <div>
          {postsByUsers?.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
export { Home };
