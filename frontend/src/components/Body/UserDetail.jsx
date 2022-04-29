import React from "react";
import { Link } from "react-router-dom";
import link from "../static/north_east-24px.svg";
import "./userDetail.css";

function UserDetail({ user }) {
  return (
    <div className="userDetailHome">
      <div className="userDetailWrapper">
        <img className="personImg" src={user.avatar_url} alt="users" />
        <span className="username">{user.id}</span>
        <Link to={`/users/${user.id}`}>
          <img className="userLink" src={link} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default UserDetail;
