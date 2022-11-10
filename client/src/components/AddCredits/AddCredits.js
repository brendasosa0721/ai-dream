import * as React from "react";
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
 

export const AddCredits= React.memo(function PricingCard() {
   const { loading, data: productsData } = useQuery(QUERY_PRODUCTS);
   console.log("here is the", productsData)
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-cntr">
        
          {productsData?.products.map((product) => (
            <Grid xs={6}>
              <Card key= {product._id} className={classes.root}>
              <CardHeader title={product.name + " credits"} className={classes.header} />
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
  );
})
export default AddCredits