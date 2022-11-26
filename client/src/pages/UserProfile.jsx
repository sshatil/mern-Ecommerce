import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/actions/userProfileActions";
import Layout from "../utils/Layout";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { name, email } = useSelector((state) => state.userProfile.user);
  const { loading } = useSelector((state) => state.userProfile);
  useEffect(() => {
    dispatch(getUserProfile(token, toast));
  }, [dispatch, token]);
  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <>
      <div className="">
        <h1>User Name: {name}</h1>
        <h1>Email: {email}</h1>
        {/* User detail page route= useDetails */}
        {/* TODO: For update profile using popup modal */}
        <div className="">
          <h1>Update Profile</h1>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
