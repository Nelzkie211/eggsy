import React from "react";
import { Typography, Container, Box } from "@mui/material";

const NoPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The page you are looking for might have been removed or does not
          exist.
        </Typography>
        {/* You can add a button or a link to the homepage or another page */}
        {/* <Button variant="contained" color="primary" component={Link} to="/">Go to Homepage</Button> */}
      </Box>
    </Container>
  );
};

export default NoPage;
