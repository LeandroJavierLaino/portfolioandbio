import * as React from "react";
import HideOnScroll from "../HideOnScroll/HideOnScroll";
import {
	AppBar,
	Toolbar,
	Typography,
	Avatar,
	createStyles,
	makeStyles,
	Theme,
	IconButton,
} from "@material-ui/core";
import flagEsp from "../../Assets/Images/logoEsp.svg";
import flagIngl from "../../Assets/Images/logoIngl.svg";
import flagFr from "../../Assets/Images/logoFr.svg";
import { useTranslation } from "react-i18next";

const CustomAppBar = () => {
	const classes = useStyles();
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar>
					<Typography variant="h6">Leandro Javier Laiño</Typography>

					<div className={classes.rightToolbar}>
						<IconButton
							onClick={() => {
								changeLanguage("es");
							}}
						>
							<Avatar src={flagEsp}></Avatar>
						</IconButton>
						<IconButton
							onClick={() => {
								changeLanguage("en");
							}}
						>
							<Avatar src={flagIngl}></Avatar>
						</IconButton>
						<IconButton
							aria-controls="menu-appbar"
							onClick={() => {
								changeLanguage("fr");
							}}
						>
							<Avatar src={flagFr}></Avatar>
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
			marginLeft: "auto",
			marginRight: -12,
		},
	})
);

export default CustomAppBar;
