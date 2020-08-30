import * as React from "react";
import {
	Paper,
	makeStyles,
	Theme,
	createStyles,
	Typography,
	Box,
} from "@material-ui/core";
import {
	SiJavascript,
	SiJava,
	SiTypescript,
	SiCsharp,
	SiHtml5,
	SiCss3,
	SiUnity,
	SiReact,
	SiNodeDotJs,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import SkillBadge from "./SkillBadge";

export function Skills() {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Paper className={classes.container}>
			<Typography className={classes.title} variant="h5">
				{t("Skills")}
			</Typography>
			<Box className={classes.skills}>
				<SkillBadge
					Icon={SiHtml5}
					skillName={"HTML 5"}
					url="https://developer.mozilla.org/en/docs/HTML/HTML5"
				/>
				<SkillBadge
					Icon={SiCss3}
					skillName={"CSS 3"}
					url="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3"
				/>
				<SkillBadge
					Icon={SiJavascript}
					skillName={"Javascript"}
					url="https://developer.mozilla.org/en/docs/Web/JavaScript"
				/>
				<SkillBadge
					Icon={SiTypescript}
					skillName={"Typescript"}
					url="https://www.typescriptlang.org/"
				/>
				<SkillBadge
					Icon={SiNodeDotJs}
					skillName={"Node JS"}
					url="https://nodejs.org/"
				/>
				<SkillBadge
					Icon={SiReact}
					skillName={"React JS"}
					url="https://en.reactjs.org/"
				/>
				<SkillBadge
					Icon={SiReact}
					skillName={"React Native"}
					url="https://reactnative.dev/"
				/>
				<SkillBadge
					Icon={SiJava}
					skillName={"Java"}
					url="https://www.java.com"
				/>
				<SkillBadge
					Icon={SiCsharp}
					skillName={"C#"}
					url="https://docs.microsoft.com/en-us/dotnet/csharp/"
				/>
				<SkillBadge
					Icon={SiUnity}
					skillName={"Unity"}
					url="https://unity.com"
				/>
			</Box>
		</Paper>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			margin: 5,
		},
		title: {
			paddingTop: 5,
			marginLeft: theme.spacing(2),
		},
		skills: {
			display: "flex",
			flexDirection: "row",
			marginTop: 5,
			marginBottom: 5,
		},
	})
);
