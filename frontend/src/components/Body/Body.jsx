import React, { useEffect, useState } from "react";
import BodyHeader from "./BodyHeader";
import Divider from "./Divider";
import UserDetail from "./UserDetail";
import "./body.css";
import DeveloperInfoButton from "../Form/DeveloperInfoButton";
import Footer from "./Footer";
import CouldNotFind from "./CouldNotFind";
import searchSvg from "../static/search-24px.svg";
import "./searchBar.css";

function Body() {
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/developers");
      const data = await response.json();
      setUsers(data);
    }
    fetchUser();
  }, [isSubmitted]);

  return (
    <div>
      <BodyHeader innerText={"Explore developer profiles"} />
      <Divider />
      <div className="searchBar">
        <div className="searchBarWrapper">
          <input
            className="inputField"
            placeholder="Search for username"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img type="submit" src={searchSvg} alt="" className="searchImg" />
        </div>
      </div>
      <div className="users" style={{ marginBottom: "30px" }}>
        {(users || [])
          .filter((user) => {
            if (search === "") {
              return user;
            } else if (user.id.toLowerCase().includes(search.toLowerCase())) {
              return user;
            }
            return false;
          })
          .map((user) => {
            return <UserDetail user={user} key={user.id} />;
          })}
      </div>
      <Divider />
      <CouldNotFind />
      <DeveloperInfoButton isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      <Footer />
    </div>
  );
}

export default Body;
