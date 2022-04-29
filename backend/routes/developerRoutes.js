const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const api = "https://api.github.com/users/";

let developerProfile = [
  {
    github_id: "himanshurhlk57",
    workattech_id: "himanshurhlk57",
    linkedin_id: "himanshu-kumar-018424178",
    codechef_id: "himanshurhlk57",
    hackerrank_id: "himanshurhlk57",
    twitter_id: "himanshurhlk57",
    medium_id: "himanshurhlk57",
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

  {
    github_id: "gcnit",
    linkedin_id: "gcnit",
    codechef_id: "gcnit",
    hackerrank_id: "gcnit",
    twitter_id: "gcnit",
    medium_id: "gcnit",
    id: "gcnit",
    avatar_url: "https://avatars.githubusercontent.com/u/4833751?v=4",
    name: "Gaurav Chandak",
    company: "workat.tech",
    blog: "https://workat.tech",
    location: "Bangalore, India",
    email: null,
    bio: "Building workat.tech;\r\nPreviously Software Engineer at  @Flipkart, @microsoft and @tracxn",
    repos: [
      {
        name: "The-Complete-FAANG-Preparation",
        html_url: "https://github.com/gcnit/The-Complete-FAANG-Preparation",
        description:
          "This repository contains all the DSA (Data-Structures, Algorithms, 450 DSA by Love Babbar Bhaiya, FAANG Questions), Technical Subjects (OS + DBMS + SQL + CN + OOPs) Theory+Questions, FAANG Interview questions, and Miscellaneous Stuff (Programming MCQs, Puzzles, Aptitude, Reasoning). The Programming languages used for demonstration are C++, Python, and Java.",
        updated_at: "2022-03-12T14:02:31Z",
      },
      {
        name: "Bootcamp",
        html_url: "https://github.com/gcnit/Bootcamp",
        description: null,
        updated_at: "2022-03-03T02:12:00Z",
      },
      {
        name: "flipkart-machine-coding-round",
        html_url: "https://github.com/gcnit/flipkart-machine-coding-round",
        description: "Prepare and practice for Flipkart Machine Coding Round",
        updated_at: "2022-01-09T08:35:21Z",
      },
      {
        name: "low-level-design",
        html_url: "https://github.com/gcnit/low-level-design",
        description:
          "This repository contains some programs for learning OOD using c++",
        updated_at: "2022-03-12T19:20:16Z",
      },
      {
        name: "mock-machine-coding-1",
        html_url: "https://github.com/gcnit/mock-machine-coding-1",
        description: null,
        updated_at: "2021-05-30T13:10:49Z",
      },
      {
        name: "Competitive-Programming-Resources",
        html_url: "https://github.com/gcnit/Competitive-Programming-Resources",
        description: "Competitive Programming & System Design Resources.",
        updated_at: "2021-08-16T19:42:56Z",
      },
      {
        name: "low-level-design-primer",
        html_url: "https://github.com/gcnit/low-level-design-primer",
        description:
          "Dedicated Resources for the Low-Level System Design. Learn how to design and implement large-scale systems. Prep for the system design interview.",
        updated_at: "2021-09-05T06:33:10Z",
      },
      {
        name: "sde-bootcamp-guidelines",
        html_url: "https://github.com/gcnit/sde-bootcamp-guidelines",
        description: null,
        updated_at: "2021-04-09T10:27:41Z",
      },
      {
        name: "code-template",
        html_url: "https://github.com/gcnit/code-template",
        description: null,
        updated_at: "2021-05-07T12:07:18Z",
      },
      {
        name: "mentorship-karona",
        html_url: "https://github.com/gcnit/mentorship-karona",
        description: "If you need a session with mentors raise an issue",
        updated_at: "2020-08-31T21:28:33Z",
      },
      {
        name: "get-a-software-engineering-job",
        html_url: "https://github.com/gcnit/get-a-software-engineering-job",
        description: "Get a Software Engineering Job - Ultimate Guide",
        updated_at: "2021-12-25T21:04:13Z",
      },
      {
        name: "gcnit",
        html_url: "https://github.com/gcnit/gcnit",
        description: null,
        updated_at: "2020-08-15T20:31:18Z",
      },
      {
        name: "pdfkit-invoice",
        html_url: "https://github.com/gcnit/pdfkit-invoice",
        description: "Generate PDF Invoices with PDFKit",
        updated_at: "2020-08-14T11:02:56Z",
      },
      {
        name: "learn_to_code",
        html_url: "https://github.com/gcnit/learn_to_code",
        description: "Resources for budding developers",
        updated_at: "2020-08-12T18:30:07Z",
      },
      {
        name: "learn-to-program",
        html_url: "https://github.com/gcnit/learn-to-program",
        description:
          "Educational resources to learn to program (Foundation in Web Development)",
        updated_at: "2021-08-16T19:43:37Z",
      },
      {
        name: "awesome-learn-to-code",
        html_url: "https://github.com/gcnit/awesome-learn-to-code",
        description: "A list of awesome resources for learning to code",
        updated_at: "2021-03-11T04:24:18Z",
      },
      {
        name: "system-design-primer",
        html_url: "https://github.com/gcnit/system-design-primer",
        description:
          "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
        updated_at: "2021-08-16T19:43:00Z",
      },
      {
        name: "beta.sdeskills.com",
        html_url: "https://github.com/gcnit/beta.sdeskills.com",
        description: "Beta SDE Skills site",
        updated_at: "2020-06-08T08:19:59Z",
      },
      {
        name: "react-codemirror2",
        html_url: "https://github.com/gcnit/react-codemirror2",
        description: "Codemirror integrated components for React",
        updated_at: "2020-05-09T15:46:29Z",
      },
      {
        name: "conclave",
        html_url: "https://github.com/gcnit/conclave",
        description:
          "CRDT and WebRTC based real-time, peer-to-peer, collaborative text editor",
        updated_at: "2020-04-07T18:40:56Z",
      },
      {
        name: "problemsolving",
        html_url: "https://github.com/gcnit/problemsolving",
        description:
          "Everything about the Problem Solving & Data Structures Round",
        updated_at: "2020-03-12T20:49:45Z",
      },
      {
        name: "mediumish-minimal",
        html_url: "https://github.com/gcnit/mediumish-minimal",
        description: null,
        updated_at: "2020-03-08T12:34:41Z",
      },
      {
        name: "machinecoding",
        html_url: "https://github.com/gcnit/machinecoding",
        description: "Everything about Machine Coding Round",
        updated_at: "2020-03-03T18:31:32Z",
      },
      {
        name: "product-search",
        html_url: "https://github.com/gcnit/product-search",
        description: null,
        updated_at: "2020-02-02T08:52:35Z",
      },
      {
        name: "pseudolocalize",
        html_url: "https://github.com/gcnit/pseudolocalize",
        description:
          "A simple webpage to pseudo-localize your texts. Super useful if you cater to non-English users as well and do not wish to test your UI layouts across different languages.",
        updated_at: "2019-02-02T07:29:27Z",
      },
      {
        name: "programming-principles",
        html_url: "https://github.com/gcnit/programming-principles",
        description:
          "Categorized overview of Programming Principles & Patterns",
        updated_at: "2021-08-16T19:44:35Z",
      },
      {
        name: "design-patterns-for-humans",
        html_url: "https://github.com/gcnit/design-patterns-for-humans",
        description: "An ultra-simplified explanation to design patterns",
        updated_at: "2021-08-16T19:44:20Z",
      },
      {
        name: "developer-roadmap",
        html_url: "https://github.com/gcnit/developer-roadmap",
        description: "Roadmap to becoming a web developer in 2018",
        updated_at: "2021-08-16T19:44:16Z",
      },
      {
        name: "Design-Patterns-Implementation",
        html_url: "https://github.com/gcnit/Design-Patterns-Implementation",
        description: "Implementations of Common Design Patterns",
        updated_at: "2021-08-16T19:44:27Z",
      },
      {
        name: "Implementations",
        html_url: "https://github.com/gcnit/Implementations",
        description: null,
        updated_at: "2017-11-22T17:36:47Z",
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
  // console.log(req.body);
  const {
    github_id,
    linkedin_id,
    codechef_id,
    hackerrank_id,
    twitter_id,
    medium_id,
  } = req.body;

  let developer = req.body;
  // console.log(developer);
  developer["id"] = github_id;

  const userGithubApi = api + github_id;
  // console.log(userGithubApi);

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
    // developerProfile.push(developer);

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
  try {
    const user = req.params.id;
    // console.log(user);
    developerProfile.map((developer) => {
      console.log(developer);
      const values = Object.values(developer);
      values.forEach((value) => {
        if (value === user) {
          res.status(200).json(developer);
          // res.status(200).json({ message: "Valid User" });
        }
      });
    });
  } catch (err) {
    res.status(404).json({ error: "User does not exist" });
    console.log(err);
  }
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
