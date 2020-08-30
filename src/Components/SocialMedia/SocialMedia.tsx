import * as React from "react";
import {
	Paper,
	makeStyles,
	Theme,
	createStyles,
	Typography,
	IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useTranslation } from "react-i18next";

export function SocialMedia() {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Paper className={classes.container}>
			<Typography className={classes.text}>
				{t("youCanFindMe")}
				<IconButton
					onClick={() => {
						window.open("https://github.com/LeandroJavierLaino", "_blank");
					}}
				>
					<GitHubIcon fontSize="default" />
				</IconButton>
				<IconButton
					onClick={() => {
						window.open(
							"https://www.linkedin.com/in/leandrojavierlaino/",
							"_blank"
						);
					}}
				>
					<LinkedInIcon fontSize="default" />
				</IconButton>
			</Typography>
		</Paper>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			margin: theme.spacing(1),
		},
		text: {
			marginLeft: theme.spacing(1),
		},
	})
);
