import React from "react";
import HomeHeader from "../../../Headers/HomeHeader";
import { useParams } from "react-router-dom";
import UserForm from "./UserForm";
const UserInfo = () => {
  const { booked_dates } = useParams();
  var parseddata = JSON.parse(decodeURIComponent(booked_dates));

  return (
    <div>
      <HomeHeader />
      <UserForm parseddata={parseddata} />
    </div>
  );
};

export default UserInfo;
