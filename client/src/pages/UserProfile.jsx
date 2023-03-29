import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfileForm from "../components/userProfile/UpdateProfileForm";
import {
  getUserProfile,
  updateUserProfile,
} from "../redux/actions/userProfileActions";
import BallLoading from "../assets/loadingGif/Ball.gif";
import { avatar } from "../utils/Avatar";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userProfile);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    password: "",
  });
  const [showUpdate, setShowUpdate] = useState(false);
  useEffect(() => {
    dispatch(getUserProfile(toast));
  }, [dispatch, loading]);
  // update user
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData, toast));
    setShowUpdate(!showUpdate);
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <img src={BallLoading} alt="" />
      </div>
    );
  }
  const image = avatar(user, 14, 14, "2xl");
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold ">My Details</h1>
        <h3 className="text-lg font-bold border-b-2 my-4">
          Personal Information
        </h3>
        <div className="flex gap-20 items-center">
          <div className="">{image}</div>
          <div className="">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>

        {showUpdate && (
          <div className="max-w-2xl mx-auto mt-10">
            <UpdateProfileForm
              formData={formData}
              setFormData={setFormData}
              handleUpdateProfile={handleUpdateProfile}
              showUpdate={showUpdate}
              setShowUpdate={setShowUpdate}
            />
          </div>
        )}
        {!showUpdate && (
          <button
            className="text-sm font-semibold border-b-2 border-blue-600 mt-3 hover:text-blue-600"
            onClick={() => setShowUpdate(!showUpdate)}
          >
            Update Profile
          </button>
        )}
      </div>
    </>
  );
};

export default UserProfile;
