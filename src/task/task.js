import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './task.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function TaskWrapper() {
    const classes = useStyles();

    return (
        <div style={{ background: "black", padding: "40px", height: '100%' }}>
            <div style={{ fontWeight: "bold", fontSize: "36px", color: "white" }}>What We Do</div>
            <div style={{ margin: "20px 0" }}>
                <div style={{ fontSize: "16px", color: 'white', marginTop: "5px" }}>We develope successfull apps for our clients who range from startup</div>
                <div style={{ fontSize: "16px", color: 'white' }}>enterpreneurs to fortune 500s</div>
            </div>
            <div>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={6}>
                            <Card style={{ maxWidth: "280px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: "200px" }}
                                        image="https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Mobile Apps
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            We offer highly advanced solutions to implement our client ideas that require innovative technology such as proximity sensors, pressure sensors, augmented reality and some others.
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">
                                        Read more >
                            </Button>
                                </CardActions>
                            </Card>
                            <Card style={{ maxWidth: "280px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: "200px" }}
                                        image="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBnYW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Cutting EDGE
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            We offer highly advanced solutions to implement our client ideas that require innovative technology such as proximity sensors, pressure sensors, augmented reality and some others.
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">
                                        Read more >
                            </Button>
                                </CardActions>
                            </Card>
                            <Card style={{ maxWidth: "280px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: "200px" }}
                                        image="https://image.shutterstock.com/image-photo/office-working-note-computer-table-260nw-1571546794.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Web development
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            We offer highly advanced solutions to implement our client ideas that require innovative technology such as proximity sensors, pressure sensors, augmented reality and some others.
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">
                                        Read more >
                            </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
