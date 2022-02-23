import React from "react";
import {
  Outlet,
  Link
} from "react-router-dom";
import { Container } from "postcss";


function App() {
  return (
  <div className = "flex flex-row">
    <nav className = "flex flex-col w-1/6 h-screen bg-gray-50">
      <h1>Test Dev 123!</h1>
      <Link to="/">Home</Link> |{" "}
      <Link to="/Store">Store</Link>
      <Link to="/Leaderboard">Learderboard</Link> |{" "}
      <Link to="/Profile">Profile</Link> |{" "}
    </nav>
    <Outlet />
  </div>
  );
}

export default App;
