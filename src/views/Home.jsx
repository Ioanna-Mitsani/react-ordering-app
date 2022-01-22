import React from "react";
import Location from "../components/Location";
function Home() {
  return (
    <div className="home">
      <h1>Are you Hungry?</h1>
      <p>Order from your favorite restaurant, café or fast food.</p>
      <p>Just enter your address below and we'll deliver it to you.</p>
      <Location />
    </div>
  );
}

export default Home;
