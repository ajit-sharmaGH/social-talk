import "./ProfileEdit.css";

import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { editUserHandler } from "../../../Context/PostContext";
import { useMainContext } from "../../../Context/MainContext";

const ProfileEditModal = () => {
  const {
    dataState: { users },
    dataDispatch,
  } = useMainContext();

  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));

  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const [editedData, setEditedData] = useState({
    profile_photo: loggedInUser?.profile_photo,
    link: loggedInUser?.link,
    bio: loggedInUser?.bio,
  });

  const { profile_photo, bio } = editedData;

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setEditedData((prev) => ({
      ...prev,
      profile_photo: URL.createObjectURL(selectedImg),
    }));
  };

  const handleUpdateClick = () => {
    editUserHandler(editedData, token, dataDispatch);
    dataDispatch({ type: "HIDE_PROFILE_EDIT_MODAL" });
  };

  const handleCancel = () => {
    dataDispatch({ type: "HIDE_PROFILE_EDIT_MODAL" });
  };

  return (
    <div className="edit-profile-main">
      <section className="profile-edit-modal">
        <div className="profile-image-container">
          <span className="profile-text">Profile</span>

          <label htmlFor="img-upload">
            <div className="image-container">
              <img
                src={profile_photo}
                alt="user_photo"
                width="200"
                className="edit-profile-image ml-1"
              />
              <span className="profile-camera-icon">
                <AiFillCamera size={25} />
              </span>
            </div>
          </label>
          <input
            id="img-upload"
            className="profile-img-upload"
            type="file"
            onChange={handleImageUpload}
          />
        </div>

        <label htmlFor="#" className="flex mt-1">
          <span>Bio</span>
          <input
            id="#"
            placeholder="Edit"
            name="bio"
            onChange={handleChange}
            value={bio}
            className="profile-bio-input ml-1"
          />
        </label>

        <button className="mr-1" onClick={handleUpdateClick}>
          Update
        </button>

        <button className="" onClick={handleCancel}>
          Discard
        </button>
      </section>
    </div>
  );
};
export { ProfileEditModal };
