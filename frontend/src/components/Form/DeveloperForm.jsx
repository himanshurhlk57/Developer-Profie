import React, { useState } from "react";
import "./developerForm.css";
import github from "../static/iconfinder_github_317712.png";
import hackerrank from "../static/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import codechef from "../static/codechef-1324440139527402917_32.png";
import linkedin from "../static/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import medium from "../static/iconfinder_Circled_Medium_svg5_5279113.png";
import twitter from "../static/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";

function FormDivider() {
  const dividerStyle = {
    marginBottom: "18px",
    height: "2px",
    color: "#D0CDE1",
  };
  return (
    <div>
      <hr className="divider" style={dividerStyle} />
    </div>
  );
}

function DeveloperForm({ clicked, setClicked }) {
  const [formData, setFormData] = useState({
    github_id: "",
    linkedin_id: "",
    codechef_id: "",
    hackerrank_id: "",
    twitter_id: "",
    medium_id: "",
  });

  const onChangeUpdate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelClick = () => {
    setClicked(false);
  };

  const submitHandler = async (e) => {
    console.log("github_id", formData.github_id);
    e.preventDefault();
    try {
      const {
        github_id,
        linkedin_id,
        codechef_id,
        hackerrank_id,
        twitter_id,
        medium_id,
      } = formData;
      const response = await fetch("/api/developers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          github_id: github_id,
          linkedin_id: linkedin_id,
          codechef_id: codechef_id,
          hackerrank_id: hackerrank_id,
          twitter_id: twitter_id,
          medium_id: medium_id,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
  return (
    <div className="developerForm">
      <div className="form">
        <h1 className="formHeading">Add developer profile</h1>
        <FormDivider />
        <form onSubmit={submitHandler}>
          <div className="label">
            <img className="formIcon" src={github} alt="" />
            <label className="labelStyle" htmlFor="github">
              Github*
            </label>
          </div>
          <input
            type="text"
            id="github"
            name="github_id"
            value={formData.github_id}
            onChange={onChangeUpdate}
          />
          <div className="label">
            <img className="formIcon" src={linkedin} alt="" />
            <label className="labelStyle" htmlFor="linkedin">
              Linkedin
            </label>
          </div>
          <input
            type="text"
            id="linkedin"
            name="linkedin_id"
            value={formData.linkedin_id}
            onChange={onChangeUpdate}
          />
          <div className="label">
            <img className="formIcon" src={codechef} alt="" />
            <label className="labelStyle" htmlFor="codechef">
              Codechef
            </label>
          </div>
          <input
            type="text"
            id="codechef"
            name="codechef_id"
            value={formData.codechef_id}
            onChange={onChangeUpdate}
          />
          <div className="label">
            <img className="formIcon" src={hackerrank} alt="" />
            <label className="labelStyle" htmlFor="hackerrank">
              Hackerrank
            </label>
          </div>
          <input
            type="text"
            id="hackerrank"
            name="hackerrank_id"
            value={formData.hackerrank_id}
            onChange={onChangeUpdate}
          />
          <div className="label">
            <img className="formIcon" src={twitter} alt="" />
            <label className="labelStyle" htmlFor="twitter">
              Twitter
            </label>
          </div>
          <input
            type="text"
            id="twitter"
            name="twitter_id"
            value={formData.twitter_id}
            onChange={onChangeUpdate}
          />
          <div className="label">
            <img className="formIcon" src={medium} alt="" />
            <label className="labelStyle" htmlFor="medium">
              Medium
            </label>
          </div>
          <input
            className="mediumInput"
            type="text"
            id="medium"
            name="medium_id"
            value={formData.medium_id}
            onChange={onChangeUpdate}
          />
          <div className="buttons">
            <button onClick={handleCancelClick} className="cancelBtn">
              Cancel
            </button>
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeveloperForm;
