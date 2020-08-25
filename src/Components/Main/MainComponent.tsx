import React from "react";
import { CssBaseline, Toolbar } from "@material-ui/core";
import CustomAppBar from "../CustomAppBar/CustomAppBar";
import Summary from "../Summary/Summary";
import { Skills } from "../Skills/Skills";
import { Portfolio } from "../Portfolio/Portfolio";
import { Contact } from "../Contact/Contact";
import { SocialMedia } from "../SocialMedia/SocialMedia";

const MainComponent = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<CustomAppBar />
			<Toolbar />
			<Summary />
			<Skills />
			<Portfolio />
			<Contact />
			<SocialMedia />
		</React.Fragment>
	);
};

export default MainComponent;
