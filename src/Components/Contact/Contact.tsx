import * as React from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";

export function Contact() {
	const classes = useStyles();
	return <Paper className={classes.container}>{"CONTACT"}</Paper>;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			margin: 5,
		},
	});
