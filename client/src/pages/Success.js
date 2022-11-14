
import React, { useEffect } from "react";
import { ADD_CREDITS } from "../utils/mutations";
import { useMutation } from '@apollo/react-hooks';
import { useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Success() {
  const [addCredits] = useMutation(ADD_CREDITS);

  const [searchParams, setSearchParams] = useSearchParams();
  let session_id = searchParams.get("session_id")

  useEffect(() => {
    if (session_id) {
      const mutationResponse = addCredits({
        variables: {
          sessionId: session_id
        }
      });
      
      setTimeout(() => {
        window.location.assign('/creations');
      }, 3000);    
    }
  },[session_id])


  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        mb: 25
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hurray! 
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Thank you for your purchase!
          You will now be redirected to the creation form.
        </Typography>
      </Container>
    </Box>
  )
}