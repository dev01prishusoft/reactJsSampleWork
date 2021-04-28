import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./slider.css";

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
}))

const ImageSlider = ({ data = [] }: any) => { // takes in images as props
    const classes = useStyles();

    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

    const slideRight = () => {
        if (index >= 0) {
            setIndex((index + 1) % data.length); // increases index by 1
        }
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(data.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };

    const backBtnCheck = () => {
        if (index === 0) {
            return 'none';
        } else {
            return 'auto';
        }
    }

    const forwordBtnStyle = () => {
        if (data.length === (index + 2)) {
            return 'none';
        } else {
            return 'auto';
        }
    }

    return (
        data.length > 2 ?
            <div style={{ display: "flex" }}>
                <div className="arrowIconDiv leftArrow" style={{ flexDirection: "row-reverse" }}>
                    <ArrowBackIcon style={{ pointerEvents: backBtnCheck(), cursor: "pointer" }} onClick={slideLeft} />
                </div>
                <div style={{ width: "75%" }}>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Grid container justify="center" spacing={6}>
                                <Card className="cornerCard" style={{ maxWidth: "280px" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: "200px" }}
                                            image={data[index].images}
                                        // title={data[0].title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data[index].title}
                                            </Typography>
                                            <Typography className="overflowText" variant="body2" color="textSecondary" component="p">
                                                {data[index].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className="middleCard" style={{ maxWidth: "280px" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: "200px" }}
                                            image={data[index + 1].images}
                                        // title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data[index + 1].title}
                                            </Typography>
                                            <Typography className="overflowText" variant="body2" color="textSecondary" component="p">
                                                {data[index + 1].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="secondary">
                                            {"Read more >"}
                                        </Button>
                                    </CardActions>
                                </Card>
                                <Card className="cornerCard" style={{ maxWidth: "280px" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: "200px" }}
                                            image={data.length > (index + 2) ? data[index + 2].images : data[0].images}
                                        // title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data.length > (index + 2) ? data[index + 2].title : data[0].title}
                                            </Typography>
                                            <Typography className="overflowText" variant="body2" color="textSecondary" component="p">
                                                {data.length > (index + 2) ? data[index + 2].description : data[0].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="arrowIconDiv rightArrow">
                    <ArrowForwardIcon style={{ pointerEvents: forwordBtnStyle(), cursor: "pointer" }} onClick={slideRight} />
                </div>
            </div>
            :
            <></>
    );
};

export default ImageSlider;
