import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


const contentTypes = [
  {
    value: "photograph of",
    label: "photograph",
  },
  {
    value: "drawing of",
    label: "drawing",
  },
  {
    value: "sketch of",
    label: "sketch",
  },
  {
    value: "3d render of",
    label: "3d render",
  },
];


export default function Form() {
  const [content, setContentType] = React.useState("content type");

  const handleChange = (event) => {
    setContentType(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-content"
          select
          label="Select your content type"
          value={content}
          onChange={handleChange}
        >
          {contentTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="describe the subject"
          
        />
      </div>
    </Box>
  );
}
