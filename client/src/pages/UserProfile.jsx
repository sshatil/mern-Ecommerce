import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/actions/userProfileActions";
import Layout from "../utils/Layout";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserProfile(token, toast));
  }, [dispatch, token]);
  return (
    <Layout>
      <div className="pt-20"></div>
    </Layout>
  );
};

export default UserProfile;
