import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
import logoTypes from '../../assets/logo-types.webp'
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';



export function Layout() {

  const logoStyle = ['Wordmark', 'Letterforms', 'Monogram', 'Symbol', 'Abstract', 'Mascot', 
                      'Emblems', 'Combo', 'Dynamic'];

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

  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({ pColor: '', sColor: '',logoStyle: logoStyle[0], style: style[0], imageDetail: detail[0], 
                                               art: art[0], technique: technique[0], camera: camera[0]});

  const [primaryColor, setPrimaryColor] = useState(0);
  const [secondaryColor, setSecondaryColor] = useState(0);
  const handleChangePrimary = (value1) => {
    setPrimaryColor(value1);
    let pColor = colorToText(value1.hex)
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, pColor: pColor }
    })
  };
  const handleChangeSecondary = (value2) => {
    setSecondaryColor(value2);
    setPrimaryColor(value2);
    let sColor = colorToText(value2.hex)
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, sColor: sColor }
    })
  };

  const handleForm = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });    
    dispatch({
      type: UPDATE_CONCEPT_INFO,
      conceptInfo: {...state.conceptInfo, [name]: value }
    })
  }

  function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }

  function colorToText(color) {
    switch (color) {
      case '#b80000':
        return 'red';
      case '#fccb00':
        return 'yellow';
      case '#db3e00':
        return 'orange';        
      case '#008b02':
        return 'green';
      case '#006b76':
        return 'dark-green';
      case '#1273de':
        return 'light-blue';
      case '#5300eb':
        return 'purple';        
      case '#eb9694':
        return 'light-red';
      case '#fad0c3':
        return 'light-yellow';
      case '#fef3bd':
        return 'light-orange';        
      case '#c1e1c5':
        return 'light-green';
      case '#bedadc':
        return 'light-dark-green';
      case '#c4def6':
        return 'light-light-blue';
      case '#bed3f3':
        return 'light-blue'; 
      case '#d4c4fb':
        return 'light-pink';       
      default:
        return "any color";
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "15px",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Define a Layout
      </Typography>
      <Grid container spacing={3}>
      { state.conceptInfo.type === 'logo' &&
        <>
          <Grid item xs={12}>
            <Item className="img-container">
              <img className="hero-img" alt="icecream sprinkles" src={logoTypes} />
            </Item>
          </Grid>            
          <Grid item xs={12}>
            <InputLabel id="logoStyle">Select a Style</InputLabel>
            <Select
              labelId="logoStyle"
              id="logoStyle"
              label="Logo Style"
              name="logoStyle"
              value={formState.logoStyle}
              onChange={handleForm}
              >
              {logoStyle.map((item) => (
                <MenuItem key={item} 
                          value={item} 
                          >{capitalize(item)}
                </MenuItem>
                ))}
            </Select>
          </Grid>
        </>
      }
        { state.conceptInfo.type !== 'logo' &&
          <Grid item xs={12}>
            <InputLabel id="style">Select a Style</InputLabel>
            <Select
              labelId="style"
              id="style"
              label="Style"
              name="style"
              value={formState.style}
              onChange={handleForm}
              >
              {style.map((item) => (
                <MenuItem key={item} 
                          value={item} 
                          >{capitalize(item)}
                </MenuItem>
                ))}
            </Select>
          </Grid>
        }
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
            <InputLabel id="type">Suggest a secondary color</InputLabel>
            <hr />
            <div>
              <GithubPicker value={secondaryColor} onChange={handleChangeSecondary} />
            </div>
          </Box>

          <TextField
            required
            id="primary"
            label={secondaryColor.hex}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        { state.conceptInfo.type !== 'logo' &&
        <>
          <Grid item xs={12}>
            <InputLabel id="imageDetail">Select Image Detail</InputLabel>
            <Select
              labelId="imageDetail"
              id="imageDetail"
              label="Image Detail"
              value={formState.imageDetail}
              name="imageDetail"
              onChange={handleForm}
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
              value={formState.technique}
              name="technique"
              onChange={handleForm}

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
              value={formState.art}
              name="art"
              onChange={handleForm}

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
              value={formState.camera}
              name="camera"
              onChange={handleForm}

              >
              {camera.map((item) => (
                <MenuItem key={item} 
                          value={item} 
                          >{capitalize(item)}
                </MenuItem>
                ))}
            </Select>
          </Grid>
        </>

        }
      </Grid>
    </React.Fragment>
  );
}