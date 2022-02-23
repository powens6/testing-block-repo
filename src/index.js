import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import LeaderBoard from "./components/Leaderboard"
import Profile from "./components/Profile"
import Store from "./components/Store"
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Leaderboard" element={<LeaderBoard />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
