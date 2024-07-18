import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'purple',
        p: 2,
        mt: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" color="white">
        &lt;Footer/&gt;
      </Typography>
    </Box>
  );
};

export default Footer;
