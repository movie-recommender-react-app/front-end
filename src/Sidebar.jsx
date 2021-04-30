import React, { useState } from "react";

export default function Sidebar() {
  const [isUsingSettings, setIsUsingSettings] = useState(false);
  return (
    <div className="sidebar">
      <div className="options">
        <ul>
          <li>
            <a href="/">New Releases</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Coming Soon</a>
          </li>
          <li>
            <a href="/">Watch Later</a>
          </li>
        </ul>
      </div>
      <hr style={{ border: "0.6px solid #4E4E4E" }} />
      <div
        className="profile"
        >
        <h1
        onClick={() => setIsUsingSettings((prevValue) => !prevValue)}
          style={{ fontFamily: "Balthazar", color: "white", fontWeight: 400 }}
        >
          Profile <span className="triangle"></span>
        </h1>
        <div className={`settings ${isUsingSettings ? "show" : "invisible"}`}>
          <p>Activity</p>
          <p>Settings</p>
          <p>Info</p>
        </div>
      </div>
    </div>
  );
}

// hey
// Are you there

//yes
// Hello
