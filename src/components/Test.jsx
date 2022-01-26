import React from "react";

function Test(category) {
  return category.map((item, i) => (
    <li key={i}>
      <p>{item}</p>
    </li>
  ));
}

export default Test;
