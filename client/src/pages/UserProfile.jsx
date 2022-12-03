import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfileForm from "../components/userProfile/UpdateProfileForm";
import {
  getUserProfile,
  updateUserProfile,
} from "../redux/actions/userProfileActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userProfile);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    password: "",
  });
  useEffect(() => {
    dispatch(getUserProfile(toast));
  }, [dispatch, loading]);
  // update user
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData, toast));
  };

  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold ">My Details</h1>
        <h3 className="text-lg font-bold border-b-2 my-4">
          Personal Information
        </h3>
        <div className="max-w-2xl mx-auto mt-10">
          <UpdateProfileForm
            formData={formData}
            setFormData={setFormData}
            handleUpdateProfile={handleUpdateProfile}
          />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
