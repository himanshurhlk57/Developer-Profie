import React, { useEffect, useState } from "react";
import BodyHeader from "./BodyHeader";
import Divider from "./Divider";
import SearchBar from "./SearchBar";
import UserDetail from "./UserDetail";
import "./body.css";
import DeveloperInfoButton from "../Form/DeveloperInfoButton";
import Footer from "./Footer";
import CouldNotFind from "./CouldNotFind";

function Body() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/developers");
      const data = await response.json();
      setUsers(data);
    }
    fetchUser();
  }, [users]);

  return (
    <div>
      <BodyHeader innerText={"Explore developer profiles"} />
      <Divider />
      <SearchBar />
      <div className="users" style={{ marginBottom: "30px" }}>
        {users.length &&
          users.map((user) => {
            return <UserDetail key={user.id} user={user} />;
          })}
      </div>
      <Divider />
      <CouldNotFind />
      <DeveloperInfoButton />
      <Footer />
    </div>
  );
}

export default Body;
