import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import UserBody from "./UserBody";

function UserProfie() {
  const [userLinks, setUserLinks] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const userDetails = async () => {
      const response = await fetch(`/api/developers/${params.id}`, {
        method: "GET",
      });
      const data = await response.json();
      setUserLinks(data);
    };
    userDetails();
  }, [params.id]);

  const { repos } = userLinks;
  return (
    <div>
      <Header />
      <UserBody userLinks={userLinks} repos={repos} />
    </div>
  );
}

export default UserProfie;
