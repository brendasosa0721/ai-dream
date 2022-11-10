import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { GithubPicker } from 'react-color';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function Layout() {
  const [primaryColor, setPrimaryColor] = useState(0);
  const [secundaryColor, setSecundaryColor] = useState(0);
  const handleChangePrimary = (value1) => {
    console.log("onChange=", value1);
    setPrimaryColor(value1);
  };
  const handleChangeSecundary = (value2) => {
    console.log("onChange=", value2);
    setSecundaryColor(value2);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Define a Layout
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          
          <InputLabel id="type">Select a Theme</InputLabel>
          <Select
            labelId="type"
            id="type"
            label="Type"
            value={10}
          >
            <MenuItem value={10}>Highly detailed</MenuItem>
            <MenuItem value={20}>Grainy</MenuItem>
            <MenuItem value={30}>Realistic</MenuItem>
            <MenuItem value={40}>Unreal engine</MenuItem>
            <MenuItem value={30}>Octane render</MenuItem>
            <MenuItem value={30}>Bokeh</MenuItem>
            <MenuItem value={30}>Vray</MenuItem>
            <MenuItem value={30}>Houdini render</MenuItem>
            <MenuItem value={30}>Quixel megascans</MenuItem>
            <MenuItem value={30}>Depth of field</MenuItem>
            <MenuItem value={30}>Raytracing</MenuItem>
            <MenuItem value={30}>Cgi</MenuItem>
            <MenuItem value={30}>Lumen reflections</MenuItem>
            <MenuItem value={30}>Volumetric fog</MenuItem>
            <MenuItem value={30}>Overglaze</MenuItem>
            <MenuItem value={30}>Analog photo</MenuItem>
            <MenuItem value={30}>Polaroid</MenuItem>
            <MenuItem value={30}>Film photography</MenuItem>
            <MenuItem value={30}>Dslr</MenuItem>
            <MenuItem value={30}>Cinema4d</MenuItem>
            <MenuItem value={30}>Studio quality</MenuItem>


          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box my={4}>
            <InputLabel id="type">Suggest a primary color</InputLabel>
            <hr />
            <div>
              <GithubPicker value={primaryColor} onChange={handleChangePrimary} />
            </div>
          </Box>

          <TextField
            required
            id="primary"
            label={primaryColor.hex}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box my={4}>
            <InputLabel id="type">Suggest a secundary color</InputLabel>
            <hr />
            <div>
              <GithubPicker value={secundaryColor} onChange={handleChangeSecundary} />
            </div>
          </Box>

          <TextField
            required
            id="primary"
            label={secundaryColor.hex}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          
          <InputLabel id="type">Select a Style</InputLabel>
          <Select
            labelId="type"
            id="type"
            label="Type"
            value={10}
          >
            <MenuItem value={10}>Accent lighting</MenuItem>
            <MenuItem value={20}>Backlight</MenuItem>
            <MenuItem value={30}>Blacklight</MenuItem>
            <MenuItem value={40}>Blinding light</MenuItem>
            <MenuItem value={40}>Candlelight</MenuItem>
            <MenuItem value={40}>Concert lighting,</MenuItem>
            <MenuItem value={40}>Crepuscular rays</MenuItem>
            <MenuItem value={40}>Direct sunlight</MenuItem>
            <MenuItem value={40}>Dusk</MenuItem>
            <MenuItem value={40}>Edison bulb</MenuItem>
            <MenuItem value={40}>Electric arc</MenuItem>
            <MenuItem value={40}>Fire</MenuItem>
            <MenuItem value={40}>Fluorescent</MenuItem>
            <MenuItem value={40}>Glowing</MenuItem>
            <MenuItem value={40}>Glowing radioactively</MenuItem>
            <MenuItem value={40}>Glow-stick</MenuItem>
            <MenuItem value={40}>Lava glow</MenuItem>
            <MenuItem value={40}>Moonlight</MenuItem>
            <MenuItem value={40}>Natural</MenuItem>
            <MenuItem value={40}>Lighting</MenuItem>
            <MenuItem value={40}>Neon lamp</MenuItem>
            <MenuItem value={40}>Nightclub lighting</MenuItem>
            <MenuItem value={40}>Nuclear waste glow</MenuItem>
            <MenuItem value={40}>Quantum dot display</MenuItem>
            <MenuItem value={40}>Spotlight</MenuItem>
            <MenuItem value={40}>Strobe</MenuItem>
            <MenuItem value={40}>Sunlight</MenuItem>
            <MenuItem value={40}>Ultraviolet</MenuItem>
            <MenuItem value={40}>Dramatic lighting</MenuItem>
            <MenuItem value={40}>Dark lighting</MenuItem>
            <MenuItem value={40}>Soft lighting</MenuItem>
          </Select>
        </Grid>

      </Grid>
      <Grid item xs={12}>
          
          <InputLabel id="type">Camera View</InputLabel>
          <Select
            labelId="type"
            id="type"
            label="Type"
            value={10}
          >
            <MenuItem value={10}>Ultra wide-angle</MenuItem>
            <MenuItem value={30}>Wide-angle</MenuItem>
            <MenuItem value={40}>Aerial view</MenuItem>
            <MenuItem value={40}>Massive scale</MenuItem>
            <MenuItem value={40}>Street level view,</MenuItem>
            <MenuItem value={40}>Panoramic</MenuItem>
            <MenuItem value={40}>Bokeh</MenuItem>
            <MenuItem value={40}>Fisheye</MenuItem>
            <MenuItem value={40}>Dutch angle</MenuItem>
            <MenuItem value={40}>Low angle</MenuItem>
            <MenuItem value={40}>Extreme long-shot</MenuItem>
            <MenuItem value={40}>Long shot</MenuItem>
            <MenuItem value={40}>Close-up</MenuItem>
            <MenuItem value={40}>Extreme close-up</MenuItem>
        
          </Select>

      </Grid>
    </React.Fragment>
  );
}