const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const api = "https://api.github.com/users/";

// let developerProfile = [];
let developerProfile = [
  {
    github_id: "himanshurhlk57",
    workattech_id: "himanshurhlk57",
    linkedin_id: "himanshurhlk57",
    codechef_id: "himanshurhlk57",
    hackerrank_id: "himanshurhlk57",
    twitter_id: "gc_nit",
    medium_id: "gc_nit",
    id: "himanshurhlk57",
    avatar_url: "https://avatars.githubusercontent.com/u/60094122?v=4",
    name: "Himanshu Kumar",
    company: "TO THE NEW",
    blog: "",
    location: "Durgapur",
    email: null,
    bio: "Frontend Engineer @ToTheNew",
    repos: [
      {
        name: "Developer-Profie",
        html_url: "https://github.com/himanshurhlk57/Developer-Profie",
        description: null,
        updated_at: "2022-04-19T14:58:28Z",
      },
      {
        name: "urlshortner",
        html_url: "https://github.com/himanshurhlk57/urlshortner",
        description:
          "A web app that transform any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.",
        updated_at: "2022-04-20T07:24:28Z",
      },
      {
        name: "express-app",
        html_url: "https://github.com/himanshurhlk57/express-app",
        description: null,
        updated_at: "2022-04-17T06:14:33Z",
      },
      {
        name: "HTMlForm",
        html_url: "https://github.com/himanshurhlk57/HTMlForm",
        description: null,
        updated_at: "2022-04-07T10:08:57Z",
      },
      {
        name: "Temp-Files",
        html_url: "https://github.com/himanshurhlk57/Temp-Files",
        description: null,
        updated_at: "2022-04-06T06:26:17Z",
      },
      {
        name: "Star-Rating-Component",
        html_url: "https://github.com/himanshurhlk57/Star-Rating-Component",
        description: null,
        updated_at: "2022-03-22T08:00:01Z",
      },
      {
        name: "ReactJs",
        html_url: "https://github.com/himanshurhlk57/ReactJs",
        description: null,
        updated_at: "2022-03-20T06:29:27Z",
      },
      {
        name: "Utility-App",
        html_url: "https://github.com/himanshurhlk57/Utility-App",
        description: null,
        updated_at: "2022-03-10T17:24:02Z",
      },
      {
        name: "ReactJs-Projects",
        html_url: "https://github.com/himanshurhlk57/ReactJs-Projects",
        description: null,
        updated_at: "2022-03-08T06:49:44Z",
      },
      {
        name: "Utility-App-CLI",
        html_url: "https://github.com/himanshurhlk57/Utility-App-CLI",
        description: null,
        updated_at: "2022-03-10T17:03:11Z",
      },
      {
        name: "Quiz-App",
        html_url: "https://github.com/himanshurhlk57/Quiz-App",
        description: null,
        updated_at: "2022-03-05T08:18:26Z",
      },
      {
        name: "Web-Development",
        html_url: "https://github.com/himanshurhlk57/Web-Development",
        description: null,
        updated_at: "2022-03-01T14:11:54Z",
      },
      {
        name: "Development",
        html_url: "https://github.com/himanshurhlk57/Development",
        description: null,
        updated_at: "2022-02-16T13:07:57Z",
      },
      {
        name: "contest-schedule",
        html_url: "https://github.com/himanshurhlk57/contest-schedule",
        description: null,
        updated_at: "2021-07-05T18:45:34Z",
      },
      {
        name: "Data-Structures-Algorithms",
        html_url:
          "https://github.com/himanshurhlk57/Data-Structures-Algorithms",
        description: null,
        updated_at: "2022-02-13T08:25:57Z",
      },
      {
        name: "Git-Practise",
        html_url: "https://github.com/himanshurhlk57/Git-Practise",
        description: null,
        updated_at: "2022-04-06T07:26:12Z",
      },
      {
        name: "Task-Manager-App",
        html_url: "https://github.com/himanshurhlk57/Task-Manager-App",
        description: null,
        updated_at: "2021-09-30T17:44:53Z",
      },
      {
        name: "PortfolioSoumo",
        html_url: "https://github.com/himanshurhlk57/PortfolioSoumo",
        description: null,
        updated_at: "2021-09-30T16:38:29Z",
      },
      {
        name: "Sorting-Visualizer",
        html_url: "https://github.com/himanshurhlk57/Sorting-Visualizer",
        description: null,
        updated_at: "2021-09-14T12:57:17Z",
      },
      {
        name: "NameWow",
        html_url: "https://github.com/himanshurhlk57/NameWow",
        description:
          "Name suggestion application that will help you to find the best name for your next project, venture, or startup using the startup-name-generator library.",
        updated_at: "2021-09-30T17:00:38Z",
      },
      {
        name: "nameitdeploy",
        html_url: "https://github.com/himanshurhlk57/nameitdeploy",
        description: null,
        updated_at: "2021-08-31T09:39:20Z",
      },
      {
        name: "nameit",
        html_url: "https://github.com/himanshurhlk57/nameit",
        description: null,
        updated_at: "2021-08-31T09:04:46Z",
      },
      {
        name: "PlacmentPrepGuide",
        html_url: "https://github.com/himanshurhlk57/PlacmentPrepGuide",
        description: "Includes all the resources for Core CS fundamentals",
        updated_at: "2021-08-15T10:01:18Z",
      },
      {
        name: "LearnFlexBox",
        html_url: "https://github.com/himanshurhlk57/LearnFlexBox",
        description: null,
        updated_at: "2021-07-01T18:47:43Z",
      },
      {
        name: "portfolio",
        html_url: "https://github.com/himanshurhlk57/portfolio",
        description: null,
        updated_at: "2021-06-27T13:20:32Z",
      },
      {
        name: "samar1",
        html_url: "https://github.com/himanshurhlk57/samar1",
        description: null,
        updated_at: "2021-06-26T16:57:05Z",
      },
      {
        name: "samar",
        html_url: "https://github.com/himanshurhlk57/samar",
        description: null,
        updated_at: "2021-06-26T16:49:27Z",
      },
      {
        name: "Music-Player",
        html_url: "https://github.com/himanshurhlk57/Music-Player",
        description: null,
        updated_at: "2021-06-29T18:50:43Z",
      },
      {
        name: "learn-javascript",
        html_url: "https://github.com/himanshurhlk57/learn-javascript",
        description:
          "Starter files for the challenges in the Learn JavaScript course",
        updated_at: "2021-06-21T17:00:14Z",
      },
      {
        name: "BookList-Bootstrap5",
        html_url: "https://github.com/himanshurhlk57/BookList-Bootstrap5",
        description: null,
        updated_at: "2021-06-19T18:53:06Z",
      },
    ],
  },
];

// get all developers
router.get("/", (req, res) => {
  const developers = [];
  developerProfile.map((developer) => {
    const dev = {};
    const { id, avatar_url } = developer;
    dev["id"] = id;
    dev["avatar_url"] = avatar_url;
    developers.push(dev);
  });
  res.status(200).json(developers);
});

// POST request:- add a developers
router.post("/", (req, res) => {
  const {
    github_id,
    workattech_id,
    linkedin_id,
    codechef_id,
    hackerrank_id,
    twitter_id,
    medium_id,
  } = req.body;

  let developer = req.body;
  developer["id"] = github_id;

  const userGithubApi = api + github_id;
  console.log(userGithubApi);

  const fetchApi = async () => {
    const response = await fetch(userGithubApi, {
      method: "GET",
    });
    const data = await response.json();
    const { avatar_url, name, company, blog, location, email, bio } = data;
    developer["avatar_url"] = avatar_url;
    developer["name"] = name;
    developer["company"] = company;
    developer["blog"] = blog;
    developer["location"] = location;
    developer["email"] = email;
    developer["bio"] = bio;
    developerProfile.push(developer);

    const { repos_url } = data;

    const fetchRepoApi = async () => {
      try {
        let repos = [];
        let per_page = 5;
        const response = await fetch(
          // repos_url + `?sort=created&per_page=${per_page}`
          repos_url + `?sort=created`
        );
        const repositry = await response.json();
        repositry.map((repo) => {
          const { name, html_url, description, updated_at } = repo;
          let repoDetails = {};
          repoDetails["name"] = name;
          repoDetails["html_url"] = html_url;
          repoDetails["description"] = description;
          repoDetails["updated_at"] = updated_at;
          repos.push(repoDetails);
        });
        developer["repos"] = repos;
        developerProfile.push(developer);
        const { id } = developer;
        res.status(201).json({ id: id });
        // res.status(201).json(developerProfile);
      } catch (err) {
        res.json({ error: "GitHub username is invalid" });
        console.log(err);
      }
    };
    fetchRepoApi();
  };
  fetchApi();
});

// get a developer
router.get("/:id", (req, res) => {
  const user = req.params.id;
  developerProfile.map((developer) => {
    const values = Object.values(developer);
    values.map((value) => {
      if (value === user) {
        // res.status(200).json(developer);
        res.status(200).json({ message: "Valid User" });
      } else {
        res.status(404).json({ error: "User does not exist" });
      }
    });
  });
});

// delete a developer
router.delete("/:id", (req, res) => {
  const user = req.params.id;
  console.log(user, "To be deleted");
  developerProfile.map((developer, index) => {
    const { id } = developer;
    if (id === user) {
      developerProfile.splice(index, 1);
      res.status(404).json({ message: "User deleted" });
    } else {
      res.json({ message: "User you are trying to delete doesn't exist" });
    }
  });
});

module.exports = router;
