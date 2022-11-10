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
  const style = ['accent lighting', 'backlight', 'blacklight', 'blinding light', 'candlelight', 
                'concert lighting', 'crepuscular rays', 'direct sunlight', 'dusk', 'Edison bulb', 
                'electric arc', 'fire', 'fluorescent', 'glowing', 'glowing radioactively', 'glow-stick', 
                'lava glow', 'moonlight', 'natural lighting', 'neon lamp', 'nightclub lighting', 
                'nuclear waste glow', 'quantum dot display', 'spotlight', 'strobe', 'sunlight', 
                'ultraviolet', 'dramatic lighting', 'dark lighting', 'soft lighting'];

  const detail = ['highly detailed', 'grainy', 'realistic', 'unreal engine', 'octane render', 'bokeh', 'vray',
                 'houdini render', 'quixel megascans', 'depth of field', 'arnold render',' 8k uhd', 'raytracing', 
                 'cgi', 'lumen reflections', 'cgsociety', 'ultra realistic', 'volumetric fog', 'overglaze', 
                 'analog photo', 'polaroid', '100mm', 'film photography', 'dslr', 'cinema4d', 'studio quality'];
  
  const art = ['Abstract', 'Medieval art', 'Renaissance', 'Baroque', 'Rococo', 'Neoclassicism', 'Romanticism', 
                'Impressionism', 'post-Expression', 'Cubism', 'Futurism', 'Art Deco', 'Abstract Expressionism', 
                'Contemporary', 'pop art', 'surrealism', 'fantasy'];
                
  const technique = ['Digital art', 'digital painting', 'color page', 'featured on pixiv', 'trending on artstation',
                     'precise line-art', 'tarot card', 'character design', 'concept art', 'symmetry', 'golden ratio', 
                     'evocative', 'award winning', 'shiny', 'smooth', 'surreal', 'divine', 'celestial', 'elegant', 
                     'oil painting', 'soft', 'fascinating', 'fine art'];
                     
  const camera = ['ultra wide-angle', 'wide-angle', 'aerial view', 'massive scale', 'street level view', 'landscape', 
                  'panoramic', 'bokeh', 'fisheye', 'dutch angle', 'low angle', 'extreme long-shot', 'long shot', 
                  'close-up', 'extreme close-up'];

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
  function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Define a Layout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel id="style">Select a Style</InputLabel>
          <Select
            labelId="style"
            id="style"
            label="Style"
            value={style[0]}
            >
            {style.map((item) => (
              <MenuItem key={item} 
                        value={item} 
                        >{capitalize(item)}
              </MenuItem>
              ))}
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
          <InputLabel id="imageDetail">Select Image Detail</InputLabel>
          <Select
            labelId="imageDetail"
            id="imageDetail"
            label="Image Detail"
            value={detail[0]}
            >
            {detail.map((item) => (
              <MenuItem key={item} 
                        value={item} 
                        >{capitalize(item)}
              </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="technique">Select Technique</InputLabel>
          <Select
            labelId="technique"
            id="technique"
            label="Technique"
            value={technique[0]}
            >
            {technique.map((item) => (
              <MenuItem key={item} 
                        value={item} 
                        >{capitalize(item)}
              </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="type">Select Art Style</InputLabel>
          <Select
            labelId="art"
            id="art"
            label="Art"
            value={art[0]}
            >
            {art.map((item) => (
              <MenuItem key={item} 
                        value={item} 
                        >{capitalize(item)}
              </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="camera">Select Camera View</InputLabel>
          <Select
            labelId="camera"
            id="camera"
            label="Camera"
            value={camera[0]}
            >
            {camera.map((item) => (
              <MenuItem key={item} 
                        value={item} 
                        >{capitalize(item)}
              </MenuItem>
              ))}
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}