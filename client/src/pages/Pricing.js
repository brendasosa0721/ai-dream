import React from "react";
import Css from "../index.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { flexbox, textAlign } from "@mui/system";
import { lightBlue } from "@mui/material/colors";
import Img from "../assets/generating.gif";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Pricing() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          mb: 4,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>

      
        <div id="text-container">
          <Typography sx={{ fontSize: "30px" }}>
            <img id="price-image" alt="" src={Img} />
            <p id="text-content">
              <strong>AI Dream </strong>is here to make your business creation
              <br />
              easier. AI is here for YOU.
              <strong>Have FUN and be creative! </strong>
            </p>
          </Typography>
        </div>

        <div className="card-container">
          <Card
            id="card1"
            sx={{
              background: "#bbdefb",
              height: "400px",
              width: "450px",
              borderRadius: "20px",
            }}
          >
            <CardContent id="card-content">
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "40px", bottom: "20px" }}
              >
                Pay As you Go
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "70px" }}
              >
                Prepaid
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href=""
                id="btn-buy"
                size="large"
                sx={{
                  background: "purple",
                  textAlign: "center",
                  top: "80px",
                  borderRadius: "10px",
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card
            id="card2"
            sx={{
              background: "#80deea",
              height: "400px",
              width: "450px",
              borderRadius: "20px",
            }}
          >
            <CardContent id="card-content">
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "40px", bottom: "20px" }}
              >
                Business
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "70px" }}
              >
                $9.99
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href=""
                id="btn-buy"
                size="large"
                sx={{
                  background: "purple",
                  textAlign: "center",
                  top: "80px",
                  borderRadius: "10px",
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card
            id="card3"
            sx={{
              background: "#d1c4e9",
              height: "400px",
              width: "450px",
              borderRadius: "20px",
            }}
          >
            <CardContent id="card-content">
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "40px", bottom: "20px" }}
              >
                Premium Plan
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "70px" }}
              >
                $39.99
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href=""
                id="btn-buy"
                size="large"
                sx={{
                  background: "purple",
                  textAlign: "center",
                  top: "80px",
                  borderRadius: "10px",
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <Item>
                Pay As You Go
                <Checkbox {...label} defaultChecked size="small" />
              </Item>

              <Item>
                Business Plan <br />
                Storage
                <Checkbox {...label} defaultChecked size="small" />
              </Item>

              <Item>
                Premium Plan
                <br />
                Storage <Checkbox {...label} defaultChecked size="small" />
                Design
                <Checkbox {...label} defaultChecked size="small" />
              </Item>
            </Stack>
          </Box>
        </div>
      
    </>
  );
}
