import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Menu: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'purple' }}>
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          <Typography variant="h6" component="div">
            &lt;Menu/&gt;
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
