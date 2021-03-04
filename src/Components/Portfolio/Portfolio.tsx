import * as React from 'react';
import {
    Paper,
    makeStyles,
    Theme,
    createStyles,
    Typography,
    Box
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Paper className={classes.container}>
            <Typography className={classes.title} variant="h5">
                {t('Projects')}
            </Typography>
            <Box className={classes.cardContainer}>
                <ProjectCard
                    projectTitle="En El Espacio Bart Se Asusto - (TGC Framework)"
                    projectContent="tgcProject"
                    projectMedia="https://i.ytimg.com/vi/lBaZLxJPQuk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC3GEj20KnnvlRi5KA9uPW7a542kw"
                    projectGithub="https://github.com/LeandroJavierLaino/2017-1C-K3051-EnElEspacioBartSeAsusto"
                    projectYoutube="https://www.youtube.com/watch?v=lBaZLxJPQuk"
                />
                <ProjectCard
                    projectTitle="TGC2018 GameConcept CrashBandicoot - (TGC Framework)"
                    projectContent="tgcProjectTemplate"
                    projectGithub="https://github.com/LeandroJavierLaino/TGC2018_GameConcept-CrashBandicoot"
                />
                <ProjectCard
                    projectTitle="En El Espacio Bart Se Asusto - (Unity) - In Progress"
                    projectContent="tgcProjectMigratesToUnity"
                    projectGithub="https://github.com/LeandroJavierLaino/BartEnElEspacioSeAsustoUnity"
                />
                <ProjectCard
                    projectTitle="En El Espacio Bart Se Asusto - (Mono Game) - In Progress"
                    projectContent="tgcProjectMigratesToMonoGame"
                    projectGithub="https://github.com/LeandroJavierLaino/BartEnElEspacioSeAsustoUnity"
                />
                <ProjectCard
                    projectTitle="Portfolio and Bio"
                    projectContent="portfolio"
                    projectGithub="https://github.com/LeandroJavierLaino/portfolioandbio"
                />
                <ProjectCard
                    projectTitle="LAN Chat (Frontend)"
                    projectContent="LANChatFront"
                    projectGithub="https://github.com/LeandroJavierLaino/reactfrontLANChat"
                />
                <ProjectCard
                    projectTitle="LAN Chat (Backend)"
                    projectContent="LANChatBack"
                    projectGithub="https://github.com/LeandroJavierLaino/javaBackLANChat"
                />
            </Box>
        </Paper>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: 5,
            padding: 5
        },
        title: {
            marginLeft: theme.spacing(2)
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    })
);
