import {useState,useEffect} from 'react'; 
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RoomSelector = ({setRoom}) => {
  // const [age, setAge] = useState('');

  const handleChange = (event) => {
    // setAge(event.target.value);
    setRoom(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 128 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Room</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"weight"}>Weight</MenuItem>
          <MenuItem value={"cardio"}>Cardio</MenuItem>
          <MenuItem value={"basketball"}>Basketball</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RoomSelector;