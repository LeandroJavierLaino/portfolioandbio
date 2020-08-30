import * as React from "react";
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
	makeStyles,
	Theme,
	createStyles,
	Typography,
	IconButton,
} from "@material-ui/core";
import { SiYoutube, SiGithub } from "react-icons/si";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
	projectTitle: string;
	projectMedia?: string;
	projectContent: string;
	projectYoutube?: string;
	projectGithub?: string;
};

export function ProjectCard(props: ProjectCardProps) {
	const {
		projectTitle,
		projectMedia,
		projectContent,
		projectYoutube,
		projectGithub,
	} = props;
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader title={projectTitle} />
			{projectMedia && (
				<CardMedia className={classes.media} image={projectMedia} />
			)}
			<CardContent>
				<Typography>{t(projectContent)}</Typography>
			</CardContent>
			<CardActions>
				{projectYoutube && (
					<IconButton onClick={() => window.open(projectYoutube, "_blank")}>
						<SiYoutube />
					</IconButton>
				)}
				{projectGithub && (
					<IconButton onClick={() => window.open(projectGithub, "_blank")}>
						<SiGithub />
					</IconButton>
				)}
			</CardActions>
		</Card>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: 5,
			maxWidth: 345,
		},
		title: {
			marginLeft: theme.spacing(2),
		},
		skills: {
			display: "flex",
			flexDirection: "row",
			marginTop: 5,
			marginBottom: 5,
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
	})
);
