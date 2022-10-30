import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useEffect } from 'react';
export default function ResponsiveDatePickers({setDay}) {  
  const [value, setValue] = React.useState(dayjs(new Date()));
  // useEffect(()=>{

  //   //get date
  //   let day = value["$d"]
  //   // console.log(day);
  //   day = day.toString().slice(0,3);
  //   console.log(day);
  // },[value])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label="Pick a date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setDay(newValue["$d"].toString().slice(0,3));
         }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}