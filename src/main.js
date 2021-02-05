import Button from '@material-ui/core/Button';
import {
    Box,
    Card, CardActions, CardContent, CardHeader, CardMedia,
    Container,
    Grid,
    IconButton,
    Typography,
    Toolbar,
    Menu, MenuItem,
    TextField,
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import React, {useState} from 'react'
import 'date-fns';

import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(3),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(4)
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.3)"
    },
    cardMedia: {
        paddingTop: "15%",
    },
    cardMedia2: {
        paddingTop: "40%",
        borderRadius: '50%',
        width: '40%',
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardContent: {
        padding: 0,
        textAlign: "center"
    },
    cardGrid: {
        marginTop: theme.spacing(4),
        padding: 0
    },
    secondaryGrid: {
        position: "relative",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
    },
    cardAction: {
        flexGrow: 1,
        padding: 0,
    },
    cardHeader: {
        padding: 0,
        textAlign:"center",
        marginLeft:theme.spacing(4.5)
    },
    mainContainer: {
        marginTop: theme.spacing(8),
        position: "relative",
        display: "flex",
        backgroundColor: "#EEE8AA",
        flexDirection: "column",
        justifyContent: "flex-start",
    },

    wrapper: {
        overflowY: "auto",
        maxHeight: '12%',
        border: '1px solid black',
        backgroundColor: "white",
        maxWidth: '70%',
        marginBottom: theme.spacing(9),
        padding: 3.5
    },
    mainTop: {
        maxHeight: '20%',
        marginTop: theme.spacing(2)
    },
    mainTopOptions: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: 0,
        alignItems: "flex-end",
        alignContent: "flex-start",
        marginBottom:theme.spacing(3)
    },
    mainBody: {
        position: "relative",
        marginLeft: theme.spacing(12.5),
        display: "flex",
        flexDirection: "row",

    },
    buttonTOP: {
        backgroundColor: "red",
        color: "black",
        marginBottom: theme.spacing(1)
    },
    buttonNEW: {
        backgroundColor: "#00fa9a",
        color: "black",
        marginBottom: theme.spacing(1)
    },
    buttonPOP: {
        backgroundColor: "yellow",
        color: "black",
        marginBottom: theme.spacing(1)
    },
    search: {
        color: "black",
        marginBottom: theme.spacing(1),
    },
    buttonPositionRight: {
        marginLeft: "auto",
    },
    buttonPositionLeft: {
        marginRight: "auto",
    },
    menuDelColor:{
        color:"red"
    }
}))
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards2 = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Show_SubMenu() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date('2020-01-01'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Share</MenuItem>
            <MenuItem className={classes.menuDelColor} onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
    );

    return (
        <main className={classes.mainContainer}>
            <Container className={classes.mainTop}>
                <Typography>Сортировать:</Typography>
                <Toolbar className={classes.mainTopOptions}>
                    <Box mr={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="flex-start">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Box>
                    <Box mr={3}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.buttonTOP}
                            startIcon={<WhatshotIcon/>}
                        >
                            HOT
                        </Button>
                    </Box>
                    <Box mr={3}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.buttonNEW}
                            startIcon={<FiberNewIcon/>}
                        >
                            NEW
                        </Button>
                    </Box>
                    <Box mr={6}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.buttonPOP}
                            startIcon={<FlashOnIcon/>}
                        >
                            POP
                        </Button>
                    </Box>
                    <Box mr={6}>
                        <TextField
                            className={classes.search}
                            id="standard-basic"
                            label="Search"
                            size="small"
                        />
                    </Box>
                </Toolbar>
                <Typography >Детальный поиск:</Typography>
            </Container>
            <Container className={classes.mainBody}>
                <Container className={classes.cardGrid} maxWidth={'md'}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={12}>
                                <Card>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={"https://source.unsplash.com/random"}
                                        title={"Image title"}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={"h5"} gutterBottom>
                                            Comment:
                                        </Typography>
                                        <Typography>
                                            Blog post. Follower are do something, but we don't know, what does he do.
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardAction}>
                                        <div className={classes.buttonPositionLeft}>
                                            <Button size={"small"} color={"primary"}>
                                                View comments
                                            </Button>
                                        </div>
                                        <div className={classes.buttonPositionRight}>
                                            <IconButton>
                                                <ThumbUpAltRoundedIcon/>
                                            </IconButton>
                                            <IconButton>
                                                <ThumbDownAltRoundedIcon/>
                                            </IconButton>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container className={classes.secondaryGrid} maxWidth={"xs"}>
                    <Typography align={"center"}>Мои сообщества:</Typography>
                    <Container className={classes.wrapper}>
                        <Grid container spacing={1}>
                            {cards2.map((card) => (
                                <Grid item key={card} xs={12} sm={12} md={12} >
                                    <Card>
                                        <CardHeader className={classes.cardHeader}
                                                    action={
                                                        <IconButton
                                                            className={classes.temp}
                                                            aria-label="settings">
                                                            <MoreVertIcon onClick={handleProfileMenuOpen} />
                                                            {renderMenu}
                                                        </IconButton>
                                                    }
                                                    title="TITLE"
                                        />
                                        <CardMedia
                                            className={classes.cardMedia2}
                                            image={"https://source.unsplash.com/random"}
                                            title={"Image title"}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            short description
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <Button className={classes.buttonPositionLeft}
                                                    size={"medium"} color={"secondary"}>
                                                ...Subscribers
                                            </Button>

                                            <Button className={classes.buttonPositionRight}
                                                    size={"medium"} color={"primary"}>
                                                See more...
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <Typography align={"center"}>Популярные пользователи:</Typography>
                    <Container className={classes.wrapper}>
                        <Grid container spacing={1}>
                            {cards2.map((card) => (
                                <Grid item key={card} xs={12} sm={12} md={12}>
                                    <Card>
                                        <CardHeader className={classes.cardHeader}
                                                    action={
                                                        <IconButton
                                                            className={classes.temp}
                                                            aria-label="settings">
                                                            <MoreVertIcon onClick={handleProfileMenuOpen} />
                                                            {renderMenu}
                                                        </IconButton>
                                                    }
                                                    title="TITLE"
                                        />
                                        <CardMedia
                                            className={classes.cardMedia2}
                                            image={"https://source.unsplash.com/random"}
                                            title={"Image title"}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant={"h8"} gutterBottom>
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardAction}>
                                            <Button size={"small"} color={"primary"}>
                                                View
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Container>
            </Container>
        </main>
    );
}
