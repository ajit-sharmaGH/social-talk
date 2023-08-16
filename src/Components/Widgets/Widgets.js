import "./Widgets.css";

import React from "react";
import { useNavigate } from "react-router";
import { useMainContext } from "../../Context/MainContext";
import { followUserHandler } from "../../Context/PostContext";
const Widgets = () => {
  const {
    dataState: { users },
    dataDispatch,
    setIsLoading,
  } = useMainContext();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const socialUser = JSON.parse(localStorage.getItem("socialUsers"));
  const loggedInUser = users?.find(
    (el) => el?.username === socialUser?.username
  );

  const handleUserProfile = (userHandler) => {
    navigate(`/user-profile/${userHandler}`);
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleFollowUser = (followUserId, token, dataDispatch,userHandler) => {
    followUserHandler(followUserId, token, dataDispatch,userHandler);
  };

  const notFollowedUsers = users?.filter(
    (el) =>
      el?.username !== loggedInUser?.username &&
      loggedInUser?.following?.every((item) => item?.username !== el.username)
  );

  return (
    <div>
      <div>
        <h2 className="ml-1 mt-2">Follow Suggestions</h2>

        {notFollowedUsers?.map((user) => {
          const { _id, firstName, lastName, userHandler, profile_photo } = user;
          return (
            <div key={_id} className="suggested-following-lists">
              <span onClick={() => handleUserProfile(userHandler)}>
                <img
                  src={profile_photo}
                  alt="user-img"
                  className="suggested-user-image"
                />
              </span>
              <div
                className="mr-auto"
                onClick={() => handleUserProfile(userHandler)}
              >
                <h4>
                  {firstName} {lastName}
                </h4>
                <small>@{userHandler}</small>
              </div>

              <button className="cursor"
                onClick={() => handleFollowUser(_id, token, dataDispatch, userHandler)}
              >
                Follow
              </button>
            </div>
          );
        })}

        {notFollowedUsers?.length === 0 && <p className="mt-2 ml-1">No Follow Suggestions</p>}
      </div>
    </div>
  );
};
export { Widgets };
