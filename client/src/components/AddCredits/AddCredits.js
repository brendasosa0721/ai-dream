
import React, { useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Divider, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import "./AddCredit.css"
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { QUERY_PRODUCTS } from "../../utils/queries.js";
import { useQuery } from "@apollo/react-hooks";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    minWidth: 215,
    textAlign: "center",
    padding: "10px",
  },
  header: {
    textAlign: "center",
    spacing: 10,
  },
  list: {
    padding: "20px",
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

const stripePromise = loadStripe('pk_test_53EV49EHulEpkScQouWloySW00atAj6KCx');

const AddCredits = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const { loading, data: productsData } = useQuery(QUERY_PRODUCTS);
   const classes = useStyles();


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout(id) {
    console.log('ID', id);
    localStorage.setItem('item', id);

    getCheckout({
      variables: { products: [id]
    },
    });
  }

  return (
    <>
    <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          mb: 4,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Add Credits
        </Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-cntr">
        
          {productsData?.products.map((product) => (
            <Grid key= {product._id} container justifyContent="space-around" xs={5} sx={{m: 3}}>
              <Card className={classes.root}>
              <CardHeader title={product.name} className={classes.header} />
              <Divider variant="middle" />
              <CardContent>
                <Typography variant="h4" align="center">
                  $ {product.price}
                </Typography>
              </CardContent>
              <Divider variant="middle" />
              <CardActions className={classes.action}>
                <ThemeProvider theme={customTheme}>
                  <StyledAvatar>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={()=>submitCheckout(product._id)}
                    >
                      Buy
                    </Button>
                  </StyledAvatar>
                </ThemeProvider>
              </CardActions>
            </Card>
          </Grid>
          ))}
      </Grid>
    </Box>
  </>
    // <div className="cart">
    //           <button onClick={()=>submitCheckout(item._id)}>Checkout</button>
    //           <span>(log in to check out)</span>
    // </div>
  );
};

export default AddCredits;
