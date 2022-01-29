import React from "react";
import { Chip } from "@mui/material";

function Filters({ stores }) {
  const filter = (category) => {
    stores.filter((store) => store.categories.includes(category));
  };

  return (
    <div>
      {stores.map((store) =>
        store.categories.map((category) => (
          <Chip label={category} onClick={filter} />
        ))
      )}
    </div>
  );
}

export default Filters;
