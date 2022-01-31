import { TextField, Button } from '@mui/material';
import React from 'react';
import { useInput } from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const style = {
  locationField: {
    marginTop: '1em',
  },
  locationButton: {
    marginTop: '1.5em',
    color: 'white',
    backgroundColor: 'orangered',
  },
};
function Location() {
  const [addressProps, resetAddress] = useInput('');
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    localStorage.setItem('address', addressProps.value);
    resetAddress();
    navigate('/stores');
  };

  return (
    <form className="location" action="/" onSubmit={submit}>
      <TextField
        {...addressProps}
        style={style.locationField}
        label="Enter your address"
        placeholder="123 Main St, New York, NY"
        variant="outlined"
      />
      <Button style={style.locationButton} variant="contained" type="submit">
        Order Now
      </Button>
    </form>
  );
}

export default Location;
