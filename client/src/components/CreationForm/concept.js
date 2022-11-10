import React, { useEffect } from 'react';
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

export default function ConceptForm() {
  const [state] = useStoreContext();
  const { currentBusinessCategory } = state;

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
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          
          <InputLabel id="type">Type of Creation</InputLabel>
          <Select
            labelId="type"
            id="type"
            label="Type"
            value={10}
          >
            <MenuItem value={10}>Logo Design Concept</MenuItem>
            <MenuItem value={20}>Product Design Concept</MenuItem>
            <MenuItem value={30}>Marketing Image</MenuItem>
            <MenuItem value={40}>Social Media Marketing</MenuItem>
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
            required
            id="description"
            name="description"
            label="Simple description (Optional)"
            multiline
            rows={5}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}