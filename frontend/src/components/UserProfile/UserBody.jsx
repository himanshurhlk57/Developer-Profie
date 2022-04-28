import React from "react";
import "./userBody.css";
import github from "../static/iconfinder_github_317712.png";
import hackerrank from "../static/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import codechef from "../static/codechef-1324440139527402917_32.png";
import linkedin from "../static/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import medium from "../static/iconfinder_Circled_Medium_svg5_5279113.png";
import twitter from "../static/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";
import emailIcon from "../static/email-24px.svg";
import locationSvg from "../static/location_on-24px.svg";
import work from "../static/business-24px.svg";
import link from "../static/insert_link-24px (1).svg";
import Heading from "./Heading";
import Footer from "../Body/Footer";
import GithubRepo from "./GithubRepo";

function PlainDiv() {
  const divStyle = {
    height: "140px",
    backgroundColor: "white",
  };
  return <div style={divStyle}></div>;
}

function UserBody({ userLinks }) {
  const {
    avatar_url,
    name,
    bio,
    github_id,
    hackerrank_id,
    linkedin_id,
    location,
    company,
    medium_id,
    twitter_id,
    email,
    blog,
    codechef_id,
  } = userLinks;

  const { repos } = userLinks;

  return (
    <>
      <div className="userBody">
        <div className="userImage">
          <img className="userImg" src={avatar_url} alt="userImage" />
        </div>
        <div className="userDetail">
          <div className="userDetails">
            <h1 className="name">{name}</h1>
            <p className="bio">{bio}</p>
          </div>
          <div className="socialLinks">
            <a
              href={`https://github.com/${github_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={github} alt="icon" />
            </a>
            <a
              href={`https://www.hackerrank.com/${hackerrank_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={hackerrank} alt="icon" />
            </a>
            <a
              href={`https://www.codechef.com/users/${codechef_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={codechef} alt="icon" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${linkedin_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={linkedin} alt="icon" />
            </a>
            <a
              href={`https://medium.com/@${medium_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={medium} alt="icon" />
            </a>
            <a
              href={`https://twitter.com/${twitter_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="socialMediaImg" src={twitter} alt="icon" />
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <img className="socialMediaImg" src={emailIcon} alt="icon" />
            </a>
          </div>
          <div className="otherDetails">
            <img className="otherDetailsImg" src={locationSvg} alt="" />
            <span className="otherCss">{location}</span>
            <img className="otherDetailsImg" src={work} alt="" />
            <span className="otherCss">{company}</span>
            <img className="otherDetailsImg" src={link} alt="" />
            <span className="otherCss">{blog ? blog : github_id}</span>
          </div>
        </div>
      </div>
      <Heading />

      {(repos || []).map((repo) => {
        return <GithubRepo key={repo.name} repo={repo} />;
      })}
      <PlainDiv />
      <Footer />
    </>
  );
}

export default UserBody;
