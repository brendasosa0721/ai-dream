import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import Cart from "../Collection/Cart"
import "./Collection.css";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
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
            My Collections
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <div className="box-container1">
            <Grid item xs={6} md={4} className="box-container">
              <ImageList
                sx={{ width: 800, height: 450 }}
                cols={2}
                className="image-list"
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} className="box-container2">
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <ImageListItemBar
                      title={item.title}
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`add to the cart ${item.title}`}
                        >
                          <AddCircleOutlinedIcon />
                          <StarBorderIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </div>

          {/* <Grid className="cart" item xs={6} md={4} style={{ display: "inline-block" , border: "1px solid black" , borderRadius: "10px", height:"fit-content" , width:"fit-content" , paddingBottom: "10px"}}>
            <Cart />
          </Grid> */}
          <Grid item xs={6} md={8}></Grid>
        </Grid>
      </Box>
    </>
  );
}









// export default function TitlebarImageList() {
//   return (
    // <div className="Collection">
    //   <h1>Welcome to your AI COLLECTION</h1>
    //   <ImageList sx={{ width: 1000, height: 550 }} cols={4}>
    //     {itemData.map((item) => (
    //       <ImageListItem key={item.img}>
    //         <img
    //           src={`${item.img}?w=248&fit=crop&auto=format`}
    //           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //           alt={item.title}
    //           loading="lazy"
    //         />

    //         <ImageListItemBar
    //           title={item.title}
    //           actionIcon={
    //             <IconButton
    //               sx={{ color: "white" }}
    //               aria-label={`add to the cart ${item.title}`}
    //             >
    //               <AddCircleOutlinedIcon />
    //               <StarBorderIcon />
    //             </IconButton>
    //           }
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    //   <Grid>
    //     <Cart />
    //   </Grid>
    // </div>
//   );


// }


// Image information
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Creation",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Creation",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Creation",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Creation",
    cols: 2,
  },
  
];
