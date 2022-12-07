import { Button, Card, CardMedia, Typography, Box, CardContent, CardActionArea} from "@mui/material"
import { useState } from "react";
import projects from "../assets/projects.json";
import "./ProjectItem.css";





export default function ProjectItem (props) {

    const item = props.item;
   
    const styles = {
        media: {
            position: "absolute",
            top: 0,
            right: 0,
            height: '100%',
            width: '100%'
   
        },
        card: {
           position: 'relative',
           height: '20vw',
           width: '50vw',
           '&:hover': {
            height: '40vw',
           }
        },
        action: {
            position: 'relative',
            height: '20vw',
            width: '50vw'
         },
        overlay: {
            position: "relative",
        }
    }

    return (
        <Card 
            sx={{ 
                width: 1, 
                height: 1, 
                }} 
            style = {styles.card}>
            <CardActionArea style = {styles.action} href = {item.link}>
                <CardMedia 
                    component='img'
                    image={item.image}
                    style = {styles.media}
                    sx={{ 
                        width: 1, 
                        height: 1, 
                        }} 
                />

                <CardContent style = {styles.overlay}>
                    <Typography gutterBottom variant="h4" component="div" sx = {{fontWeight: 500}}>
                        {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {item.description}
                    </Typography>
                </CardContent>
                {/* <Box
                sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        gap: '1rem',
                        padding: '1rem 1rem'
                    }}
                    > */}
                        {/* <Box>
                            <Typography sx={{ 
                                fontSize: 'h6.fontSize', 
                                fontWeight: 'bold'
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography>
                                {item.description}
                            </Typography>
                        </Box> */}
                    {/* </Box>   */}
                {/* </Box> */}
            </CardActionArea>
        </Card>
    );
}

