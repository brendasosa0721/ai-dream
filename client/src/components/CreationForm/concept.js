import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import BusinessCategoryForm from '../../components/BusinessCategoryForm'
import BusinessTypeForm from '../../components/BusinessTypeForm'
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';

export default function ConceptForm() {
  const [state, dispatch] = useStoreContext();
  const { currentBusinessCategory } = state;
  const [formState, setFormState] = useState({ name: '', type: '', description: '',  detailType: 'Select'});
  const [type, setType] = useState('image');

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...formState, [name]: value}
    })
    if (value === 'Logo Design Concept'){setType("logo");}
    if (value === 'Product Design Concept'){setType("product");}
    if (value === 'Social Media Marketing'){setType("image");}
    if (value === 'General Purpose Image'){setType("image");}
  };

  useEffect(() => {
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...formState, type: type}
    })
  },[formState])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Creation Description
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name of your creation (Will not affect the result.)"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={12}>
          <InputLabel id="detailType">Type of Creation</InputLabel>
          <Select
            required
            labelId="detailType"
            id="detailType"
            name="detailType"
            label="detailType"
            value={formState.detailType}
          
            onChange={handleChange}
          >
            <MenuItem value="Select">Select type of creation...</MenuItem>
            <MenuItem value="Logo Design Concept">Logo Design Concept</MenuItem>
            <MenuItem value="Product Design Concept">Product Design Concept</MenuItem>
            <MenuItem value="Social Media Marketing">Social Media Marketing</MenuItem>
            <MenuItem value="General Purpose Image">General Purpose Image</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
        <BusinessCategoryForm />
        </Grid>
        {currentBusinessCategory !== "Select category..." &&
          <Grid item xs={12}>
            <BusinessTypeForm />
          </Grid>
        }
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label={"Short description of your "+ type +" (Optional)"}
            fullWidth
            autoComplete="given-name"
            placeholder='Joystick for video games / Wolf in the forest'
            variant="standard"
            onChange={handleChange}
          />
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}