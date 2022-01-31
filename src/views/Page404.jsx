import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h3">404 - Page not found</Typography>
      <Typography variant="h5">
        Hmmm... we didn't find what you were looking for
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: '1.5em',
          color: 'white',
          backgroundColor: 'orangered',
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        RETURN TO HOME PAGE
      </Button>
    </div>
  );
}

export default Page404;
