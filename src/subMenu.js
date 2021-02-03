import Button from '@material-ui/core/Button';
import {
    AppBar,
    Box,
    Card, CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Paper,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import Show_Menu from "./menu";
import  PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import  LayerIcon from '@material-ui/icons/Layers';

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost :{
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(3),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent:{
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(4)
    },
    overlay:{
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        backgroundColor:"rgba(0,0,0,.3)"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent:{
      flexGrow: 1
    },
    cardGrid:{
        marginTop:theme.spacing(4)
    }
}))
const cards=[1,2,3,4,5,6,7,8,9]

export default function Show_SubMenu() {
    const classes=useStyles();
    return(
    <main>
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h1"
                                variant="h3 "
                                color="inherit"
                                gutterBottom
                            >
                                Test Project
                            </Typography>
                            <Typography
                                variant="h5"
                                color="inherit"
                                paragraph
                            >
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Learn more
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <div className={classes.mainContent}>
        <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Test Project </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph gutterBottom>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
        </Container>
        </div>
        <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant={"contained"} color={"primary"}>Start Now</Button>
                </Grid>
                <Grid item>
                    <Button variant={"outlined"} color={"primary"}>Learn more</Button>
                </Grid>
            </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth={"md"}>
            <Grid container spacing={4}>
                {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={"https://source.unsplash.com/random"}
                                title={"Image title"}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant={"h5"} gutterBottom>
                                    Blog post
                                </Typography>
                                <Typography>
                                    Blog post. Follower are do something, but we don't know, what does he do.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size={"small"} color={"primary"}>
                                    View
                                </Button>
                                <Button size={"small"} color={"primary"}>
                                    Edit
                                </Button>
                                <LayerIcon/>
                                <PlayCircleFilledIcon/>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </main>
    );
}