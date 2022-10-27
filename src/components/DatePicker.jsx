import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

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

