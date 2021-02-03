import Button from '@material-ui/core/Button';
import {AppBar, Box, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import Show_Menu from "./menu";
import Show_SubMenu from "./subMenu";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        background: "#F0E68C",
        color: "black"
    },
    mainFeaturesPost :{
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(9),

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
    }
}))


function App() {
    const classes = useStyles();
    return (
        <>
            <Show_Menu/>
            <Show_SubMenu/>
        </>

    );
}

export default App;
// <>
//
//     <AppBar position="fixed" className={classes.appBar}>
//         <Container fixed>
//             <Toolbar>
//                 <IconButton edge='start' color='inherit' aria-label="menu" className={classes.menuButton}>
//                     <MenuIcon/>
//                 </IconButton>
//                 <Typography variant="h6" className={classes.title}>Test project</Typography>
//                 <Box mr={3}>
//                     <Button color='inherit' variant="outlined">Log In</Button>
//                 </Box>
//                 <Button color='secondary' variant="contained">Sign Up</Button>
//             </Toolbar>
//         </Container>
//     </AppBar>
// </>
// <main>
//     <Paper className={classes.mainFeaturesPost}
//            style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
//         <Container fixed>
//             <div className={classes.overlay} />
//             <Grid container>
//                 <Grid item md={6}>
//                     <div className={classes.mainFeaturesPostContent}>
//                         <Typography
//                             component="h1"
//                             variant="h3 "
//                             color="inherit"
//                             gutterBottom
//                         >
//                             Test Project
//                         </Typography>
//                         <Typography
//                             variant="h5"
//                             color="inherit"
//                             paragraph
//                         >
//                             Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit,
//                             sed do eiusmod tempor incididunt
//                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                         </Typography>
//                         <Button variant="contained" color="secondary">
//                             Learn more
//                         </Button>
//                     </div>
//                 </Grid>
//             </Grid>
//         </Container>
//     </Paper>
// </main>