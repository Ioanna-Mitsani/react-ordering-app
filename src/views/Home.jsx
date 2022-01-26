import React from "react";
import Location from "../components/Location";

import "./Home.scoped.css";
function Home() {
  return (
    <div className="home">
      <h1 className="title">Are you Hungry?</h1>
      <p className="subtitle">
        Order from your favorite restaurant, café or fast food.
      </p>
      <p className="subtitle">
        Just enter your address below and we'll deliver it to you.
      </p>
      <Location className="location" />
    </div>
  );
}

export default Home;
