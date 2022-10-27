import '../styles/NavBar.css';

const NavBar = () => {
    return (
      <nav className="nav">
        <div className="nav-title">
          <span className="nav-title-nu">NU</span>GymBuddies
        </div>
        {/*<div className="form-outline">
            {<Search />}
        </div>*/}
      </nav>
    )
  }
  
  export default NavBar;
// or using MUI

/*
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import '../index.css';
  const NavBar = () => {
    return (
      <ThemeProvider theme={headerTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "#2E6171" }}>
            <Toolbar>
              <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1, fontSize: 30, fontFamily: 'Ubuntu'}}>
                NUGymBuddies
              </Typography>
              <AuthButton />
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    );
  }
  
  export default NavBar;
  */
  