import React, { FC } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ButtonUI from '@mui/material/Button';

interface BtnProps {
  name: string;
}
export const Button: FC<BtnProps> = ({ name }) => (
  <ButtonUI variant="contained" type="submit" endIcon={<SendIcon />}>
    {name}
  </ButtonUI>
);
