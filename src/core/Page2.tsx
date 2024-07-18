import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Menu from './components/Menu';
import Footer from './components/Footer';

const Page2: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Menu />
      <Container
        component="main"
        sx={{
          mt: 4,
          mb: 4,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'lightblue',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Page2 Content
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page2;
