import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_CREATION } from '../../utils/mutations';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { red } from '@mui/material/colors';
import noImage from '../../assets/no-image.jpg'
import Alert from '@mui/material/Alert';


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
  // const { loading, data: userData } = useQuery(QUERY_ME);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState();
  const [errorUrls, setErrorUrls] = useState([]);
  const [removeCreation, { data: removeCreationRes }] = useMutation(REMOVE_CREATION);
  const [lazyData, {loading, data: userData }] = useLazyQuery(QUERY_ME);
  const [collection, setCollection] = useState({userData})

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

  useEffect(() => {
    const data = lazyData();
    setCollection(data)

  },[collection])


  
  const deleteFromCollection = async (modalImage) => {
    
    const remove = await removeCreation({
      variables: {
        creationUrl: modalImage
      }
    });

    
    if (remove) {
      // userData.me.creations.filter((item) => item != modalImage);
      await lazyData();
      
    }

    closeModal();
  }

  const imageError = e => {
    setErrorUrls([...errorUrls, e.target.currentSrc]);
    console.log("Error 403 This external blob image does not longer exist. TODO: Persistent images in local server.");
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!Auth.loggedIn()) {
    return <Navigate to="/sign-in" />;
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
          My Collections
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container justifyContent="space-around" sx={{mt: 3, mb: 25}}>
      {collection?.me.creations < 1 && <Alert severity="warning">There are no creations.</Alert>}

        {collection?.me.creations.map((item) => (
  
          
          <ImageListItem className={`thumbnail`} key={item.creationUrl.creationUrl} sx={{m: 2}}>


            <img
              onClick={() => openModal(item.creationUrl.creationUrl)}
              onError={imageError}
              src={errorUrls.includes(item.creationUrl.creationUrl) ? noImage : item.creationUrl.creationUrl}
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
                sx={{ mt: 1, mb: 2, mr: 2, bgcolor: 'crimson'}}
                onClick={() => deleteFromCollection(modalImage)}
              >
                Remove From Collections
        </Button>
      </Grid>
    </Dialog>
  </>
  );
  
}