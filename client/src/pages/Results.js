import React, { useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ADD_CREATION } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};



export default function TitlebarImageList() {
  const urlData = JSON.parse(localStorage.getItem('creations'));
  const [addCreation] = useMutation(ADD_CREATION);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState();
  
  const closeModal = () => {
    setModalOpen(false);
  }
  const openModal = (image) => {
    setModalOpen(true);
    setModalImage(image);
  }
  const handleClick = e => {
    e.stopPropagation();
  };


// 
  // const imageData = [];
  // if(urlData.data.length !== 0){
  //   urlData.data.forEach(element => {
  //     imageData.push(element.url);
  //   });
  // }

  const HandleAddToCollection = async (modalImage) => {
    const mutationResponse = await addCreation({
      variables: {
        url: modalImage
      }
    });
    closeModal();
  }


  return (
    
    <>
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
          Results
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container justifyContent="space-around" sx={{mt: 3, mb: 5}}>
        {imageData.map((item) => (
          <ImageListItem className='thumbnail' key={item.img} sx={{m: 2}}>
            <img
              onClick={() => openModal(item.img)}
              
              src={`${item.img}`}
              alt={'img'}
              loading='lazy'
            />

          </ImageListItem>
        ))}
    </Grid>
    <Dialog
        disableEscapeKeyDown
        onClick={handleClick}
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Grid container justifyContent="flex-end">
        <CloseIcon onClick={closeModal} />
      </Grid>
      <img width="600px" 
        src={`${modalImage}`}
        alt={'img'}
        loading="lazy"
      />
      <Grid container justifyContent="flex-end">
        <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, mb: 2, mr: 2 }}
                onClick={() => HandleAddToCollection(modalImage)}
              >
                Add to Collections
        </Button>
      </Grid>
    </Dialog>
  </>
  );
  
}


const imageData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

// add clickaway listener to modal
// add to collection -to add image to collection