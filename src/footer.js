import {makeStyles} from "@material-ui/core/styles";

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

import React, {useState} from 'react'
import {
    BottomNavigation, BottomNavigationAction,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#F0E68C",
        paddingTop:9,
        paddingBottom:0,
    },
    footer:{
        background: "#F0E68C",
    }
}))
export default function Show_Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <footer className={classes.footer}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography align={"center"} color={"textSecondary"} component={"p"} variant={"subtitle1"}>
                Footer. Hakaton. Test Prject. Made by Mishany32
            </Typography>
        </footer>
    )
}