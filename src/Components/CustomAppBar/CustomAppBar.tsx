import * as React from 'react';
import HideOnScroll from '../HideOnScroll/HideOnScroll';
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    createStyles,
    makeStyles,
    Theme,
    IconButton
} from '@material-ui/core';
import flagEsp from '../../Assets/Images/logoEsp.svg';
import flagIngl from '../../Assets/Images/logoIngl.svg';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useTranslation } from 'react-i18next';

type CustomAppBarProps = {
    theme: string;
    toggleTheme(): void;
};

const CustomAppBar = ({ theme, toggleTheme }: CustomAppBarProps) => {
    const classes = useStyles();
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant={window.screen.width > 360 ? 'h6' : 'subtitle1'}
                    >
                        Leandro Javier Laiño
                    </Typography>

                    <div className={classes.rightToolbar}>
                        <IconButton onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <Brightness7Icon fontSize="large" />
                            ) : (
                                <Brightness4Icon fontSize="large" />
                            )}
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                changeLanguage('es');
                            }}
                        >
                            <Avatar src={flagEsp}></Avatar>
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                changeLanguage('en');
                            }}
                        >
                            <Avatar src={flagIngl}></Avatar>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rightToolbar: {
            marginLeft: 'auto',
            marginRight: -12
        }
    })
);

export default CustomAppBar;
