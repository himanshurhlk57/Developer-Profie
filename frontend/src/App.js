import UserProfie from "./components/UserProfile/UserProfie";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<UserProfie />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
