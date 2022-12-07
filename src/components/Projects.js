import { Button, Card, CardMedia, Typography, Box} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import projects from "../assets/projects.json";
import ProjectItem from "./ProjectItem";
import React from "react";


export default function Projects () {

    return (
        <section>
            <Typography variant="h3" align="center" sx = {{fontWeight: 'bold'}} >
                projects
            </Typography>
            <Grid 
                container
                spacing = {8}
                justifyContent="center"
                alignItems="center"
                sx={{px: 12, py: 2}}>
                    {projects.map(item => 
                    <Grid container spacing={2} xs={6} md={6}>
                        <ProjectItem 
                        item={item}
                        />
                    </Grid> 
                    )}
            </Grid>
        </section>
    );
}

