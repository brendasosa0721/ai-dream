import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BusinessCategoryForm from '../../components/BusinessCategoryForm'
import BusinessTypeForm from '../../components/BusinessTypeForm'
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';

export default function ConceptForm() {
  const [state, dispatch] = useStoreContext();

  const { currentBusinessCategory } = state;
  const [formState, setFormState] = useState({ name: '', type: '', description: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: formState
    })
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Creation Description
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name of your creation"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="type">Type of Creation</InputLabel>
          <Select
            labelId="type"
            id="type"
            name="type"
            label="Type"
            value="Logo Design Concept"
            onChange={handleChange}
          >
            <MenuItem value="Logo Design Concept">Logo Design Concept</MenuItem>
            <MenuItem value="Product Design Concept">Product Design Concept</MenuItem>
            <MenuItem value="Marketing Image">Marketing Image</MenuItem>
            <MenuItem value="Social Media Marketing">Social Media Marketing</MenuItem>
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
            label="Simple description (Optional)"
            multiline
            rows={5}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}