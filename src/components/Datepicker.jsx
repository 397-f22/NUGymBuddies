import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function ResponsiveDatePickers() {  
  const [value, setValue] = React.useState(dayjs(new Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label="Gym Days"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
         }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}