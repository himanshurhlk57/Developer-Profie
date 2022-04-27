import React from "react";
import "./githubRepo.css";
import link from "../static/north_east-24px.svg";
import Divider from "../Body/Divider";

function GithubRepo({ repo }) {
  const { name, updated_at, description, html_url } = repo;
  const dateInFormat = updated_at.split("T")[0];
  return (
    <div className="githubRepo">
      <Divider />
      <div className="githubRepoWrapper">
        <h1 className="repoName">{name}</h1>
        <a href={html_url} target="__blank">
          <img className="repoUserImage" src={link} alt="" />
        </a>
        <span>Updated on {dateInFormat}</span>
      </div>
      <h2 className="descriptionStyle">{description}</h2>
    </div>
  );
}

export default GithubRepo;
