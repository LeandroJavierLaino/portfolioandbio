import React, { useState } from 'react';
import {
    createMuiTheme,
    CssBaseline,
    ThemeProvider,
    Toolbar
} from '@material-ui/core';
import CustomAppBar from '../CustomAppBar/CustomAppBar';
import Summary from '../Summary/Summary';
import { Skills } from '../Skills/Skills';
import { Portfolio } from '../Portfolio/Portfolio';
import { Contact } from '../Contact/Contact';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import Experience from '../Experience/Experience';

const MainComponent = () => {
    const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>(
        'light'
    );

    const toggleTheme = () => {
        setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
    };

    const themeSelected = createMuiTheme({
        palette: {
            type: selectedTheme
        }
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={themeSelected}>
                <CssBaseline />
                <CustomAppBar theme={selectedTheme} toggleTheme={toggleTheme} />
                <Toolbar />
                <Summary />
                <Skills />
                <Experience />
                <Portfolio />
                <Contact />
                <SocialMedia />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default MainComponent;
