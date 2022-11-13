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



  const imageData = [];
  console.log(urlData.data);
  if(urlData.data.length !== 0){
    urlData.data.forEach(element => {
      console.log(element.url);
      imageData.push(element.url);
    });
  }

  const HandleAddToCollection = async (modalImage) => {
    const mutationResponse = await addCreation({
      variables: {
        url: modalImage
      }
    });
    closeModal();
  }

  console.log(imageData);

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
          <ImageListItem className='thumbnail' key={item} sx={{m: 2}}>
            <img
              onClick={() => openModal(item)}
              
              src={`${item}`}
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



