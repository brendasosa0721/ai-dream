//Dependecies

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import CollectionsSharpIcon from "@mui/icons-material/CollectionsSharp";


import Button from "@mui/material/Button";

import { purple } from "@mui/material/colors";
import "../index.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));



export default function HowItWorks() {
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
      >
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            How it works
          </Typography>
        </Toolbar>
      </AppBar>

      <div id="text-containter">
        <Typography variant="h4" component="span">
          <p id="animate-character">
            AI Dream is here to make your business idea come true.
            <br />
            Tell us what you want and AI will make it for you.
            <br />
            Don't be shy and be creative.
          </p>
        </Typography>
      </div>

      <Timeline position="alternate" id="timeline-container">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector id="connector" />
            <TimelineDot>
              <LaptopMacIcon
                sx={{ height: "100px", width: "100px" }}
                id="fill"
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "100px", px: 2 }}>
            <Typography variant="h6" component="span">
              Register
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          ></TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector id="connector" />
            <TimelineDot color="primary">
              <ShoppingCartSharpIcon
                sx={{ height: "100px", width: "100px" }}
                id="fill"
              />
            </TimelineDot>
            <TimelineConnector id="connector" />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "100px", px: 2 }}>
            <Typography variant="h6" component="span">
              Buy your credits
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector id="connector" />
            <TimelineDot color="primary" variant="outlined">
              <BorderColorSharpIcon
                sx={{ height: "100px", width: "100px" }}
                id="fill"
              />
            </TimelineDot>
            <TimelineConnector
              sx={{ bgcolor: "secondary.main" }}
              id="connector"
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "100px", px: 2 }}>
            <Typography variant="h6" component="span">
              Get ready to create
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ bgcolor: "secondary.main" }}
              id="connector"
            />
            <TimelineDot color="secondary">
              <CollectionsSharpIcon
                sx={{ height: "100px", width: "100px" }}
                id="fill"
              />
            </TimelineDot>
            <TimelineConnector id="connector" />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "100px", px: 2 }}>
            <Typography variant="h6" component="span">
              Access your collection
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <div id="btn-hiw">
        <Button
          variant="contained"
          sx={{ height: "100px", width: "300px" }}
          id="btn-started"
        >
          Get Started
        </Button>
      </div>
    </>
  );
}
