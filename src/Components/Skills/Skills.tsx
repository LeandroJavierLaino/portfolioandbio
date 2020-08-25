import * as React from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";

export function Skills() {
	const classes = useStyles();

	return <Paper className={classes.container}>{"SKILLS / TECHNOLOGIES"}</Paper>;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			margin: 5,
		},
	})
);
