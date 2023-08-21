import { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoMdRemoveCircle } from "react-icons/io";
import { editPostHandler } from "../../../Context/PostContext";
import { useMainContext } from "../../../Context/MainContext";
import "./EditPost.css";
import { useTheme } from "../../../Context/ThemeContext";
export const AddPost = () => {
  const [postData, setPostData] = useState();

  const {
    dataDispatch,
    dataState: { posts, postIdToBeEdit },
  } = useMainContext();
  const { theme } = useTheme();

  useEffect(() => {
    const editPostData = posts?.find((post) => post._id === postIdToBeEdit);
    setPostData(editPostData);
  }, [postIdToBeEdit, posts]);

  const token = localStorage.getItem("token");

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setPostData((prev) => ({
      ...prev,
      postImg: URL.createObjectURL(selectedImg),
    }));
  };

  const handlePostClick = () => {
    if (postIdToBeEdit) {
      editPostHandler(postIdToBeEdit, postData, token, dataDispatch);
      dataDispatch({ type: "CLEAR_ID_TO_EDIT" });
      dataDispatch({ type: "HIDE_POST_MODAL" });
    }
  };

  const handleRemoveFile = () => {
    setPostData((prev) => ({ ...prev, postImg: "" }));
  };

  const handleGoBack = () => {
    dataDispatch({ type: "HIDE_POST_MODAL" });
    dataDispatch({ type: "CLEAR_ID_TO_EDIT" });
  };

  return (
    <div className={`edit-post-section`}>
      <div
        className={`${
          theme
            ? "edit-modal-in-dark-theme textarea-container textarea-edit-modal"
            : "posting-bg-in-light-theme textarea-container textarea-edit-modal"
        }`}
      >
        <textarea
         id=""
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
            //   src={loggedInUser?.profile_photo}/
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
        <button className={`cancel-post-button cursor`} onClick={handleGoBack}>
          Cancel
        </button>
      </div>
    </div>
  );
};
