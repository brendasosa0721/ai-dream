import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import toGenerate from '../../assets/to-generate.png';
import generating from '../../assets/generating.gif';
import {
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';
import { QUERY_CREATION, 
         QUERY_CURRENT_BUSINESS_CATEGORY, 
         QUERY_CURRENT_BUSINESS_TYPES } from "../../utils/queries";
import { useStoreContext } from '../../utils/GlobalState';


export default function Review() {
  const [state, dispatch] = useStoreContext();
  const { conceptInfo, currentBusinessType,  currentBusinessCategory} = state;
  const [formState, setFormState] = useState({ numCreations: 0, readyToOrder: false});
  const [totalCredits, setTotalCredits] = useState(0);
  const [numCreations, setNumCreations] = useState(0);
  const [readyToOrder, setReadyToOrder] = useState(false);
  




  const handleChange = event => {
    const { name, value } = event.target;
    setReadyToOrder(true);
    setTotalCredits(value * 5);
    setNumCreations(value);
    setFormState({
      ...formState,
      [name]: value
    });
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, [name]: value}
    });
    
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, readyToOrder: true}
    });

    console.log('STATE', state);
  };




  return (
    <React.Fragment>
      <Grid item xs={3}>
        {!state.conceptInfo.promptLoading &&
        <img className="hero-img" alt="" src={toGenerate} />
        }
        {state.conceptInfo.promptLoading &&
        <img className="hero-img" alt="" src={generating} />
        }
      </Grid>  
      <Typography variant="h6" gutterBottom>
        Review and Create
      </Typography>
      <List disablePadding>
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary={conceptInfo.detailType} secondary={conceptInfo.name} />
          </ListItem>
        <hr />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Number of Creatons" />
          <Select
            labelId="numCreations"
            id="numCreations"
            name="numCreations"
            disabled={state.conceptInfo.promptLoading}
            value={numCreations}
            onChange={handleChange}
          >
            <MenuItem value={0}> Select... </MenuItem>
            <MenuItem value={1}>1 (I'm gonna get lucky) </MenuItem>
            <MenuItem value={3}>3 (Standard) </MenuItem>
            <MenuItem value={6}>6 (Recomended)</MenuItem>
            <MenuItem value={12}>12 (Safer option)</MenuItem>
          </Select>
        </ListItem>

        <Grid item xs={12}>

        </Grid>
        <hr />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Credits" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalCredits}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}