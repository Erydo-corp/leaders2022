import React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton({text}) {
  return (
    <Button variant="contained">{text}</Button>
  );
}
