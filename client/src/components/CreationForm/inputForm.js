import React , {useEffect, useState} from 'react';
import Auth from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Concept from './concept';
import { Layout } from './layout';
import Review from './review';
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CREATION, QUERY_ME } from "../../utils/queries";
import { REST_CREDITS } from "../../utils/mutations";
import {
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';


const steps = ['Concept', 'Layout', 'Review'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Concept />;
    case 1:
      return <Layout />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function InputForm() {
  
  const { data: userData } = useQuery(QUERY_ME);
  const [restCredits] = useMutation(REST_CREDITS);
  const [alert, setAlert] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
      if (userData?.me.credits < 1) {
        setAlert("You don't have enough credits.");
        setBtnDisabled(true);
      }
  },[userData])

  const [state, dispatch] = useStoreContext();
  const { conceptInfo } = state;

  const [activeStep, setActiveStep] = useState(0);
  const [readyToOrder, setReadyToOrder] = useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [prompt, {loading, data, error}] = useLazyQuery(QUERY_CREATION,{
    variables : {promptInput: JSON.stringify(state)}
    }
  );

  let result;


  useEffect(() => {
    if (!loading) {
      result = data?.api.data;
  
      if (result) {
        const mutationResponse = restCredits({
          variables: {
            credits: conceptInfo.totalCredits
          }
        });
      
        localStorage.setItem('creations', JSON.stringify(result));
        window.location.assign("/results");
      }
      
      
    }
  },[loading])

  
  useEffect(() => {
    if (state.conceptInfo.detailType === 'Select') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    setReadyToOrder(state.conceptInfo.readyToOrder);
  },[state])

  async function handleGenerate(event) {
    event.preventDefault();
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, promptLoading: true}
    })
    prompt();

  }

  if (!Auth.loggedIn()) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Concept Design 
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {alert &&
          <Alert severity="error">{alert}</Alert>
        }
          <Typography component="h1" variant="h4" align="center">
            Let's design it!
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for mining the Ai.
              </Typography>
              <Typography variant="subtitle1">
                Here are your results...
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                { !readyToOrder &&
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={(activeStep === steps.length - 1) || btnDisabled}
                  >
                    {activeStep === steps.length - 1 ? 'Get Ready' : 'Next'}
                  </Button>
                }
                { readyToOrder && 
                  <Button
                    variant="contained"
                    onClick={handleGenerate}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={state.conceptInfo.promptLoading || btnDisabled}
                  >
                    {activeStep === steps.length - 1 ? 'Design it!' : 'Next'}
                  </Button>
                }

              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}