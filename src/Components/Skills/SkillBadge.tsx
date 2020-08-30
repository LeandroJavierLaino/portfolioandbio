import * as React from "react";
import { IconType } from "react-icons/lib";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type ISkillBadgeProps = {
	Icon: IconType;
	skillName: string;
	url?: string;
};

export default function SkillBadge(props: ISkillBadgeProps) {
	const { Icon, skillName, url } = props;
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Icon
				size={30}
				onClick={() => {
					window.open(url || "", "_blank");
				}}
				className={classes.icon}
			/>
			<Typography>{skillName}</Typography>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "row",
			margin: 5,
		},
		icon: {
			marginRight: 5,
		},
	})
);
