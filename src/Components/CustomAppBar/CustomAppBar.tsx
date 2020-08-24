import * as React from 'react';
import HideOnScroll from '../HideOnScroll/HideOnScroll';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const CustomAppBar = () =>{
  return (
    <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
    </HideOnScroll>
  );
}

export default CustomAppBar;