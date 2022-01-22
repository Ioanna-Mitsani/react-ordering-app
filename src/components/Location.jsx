import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

function Location() {
  const [address, setAddress] = useState("");

  const storeAddress = (event) => {
    event.preventDefault();
    console.log({ address });
  };

  return (
    <form onSubmit={storeAddress()}>
      <TextField
        label="Enter your address"
        placeholder="123 Main St, New York, NY"
        variant="outlined"
        value={address}
        onInput={(e) => setAddress(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Order Now
      </Button>
    </form>
  );
}

export default Location;
