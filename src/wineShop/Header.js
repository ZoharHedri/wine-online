import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid, IconButton } from '@material-ui/core';
import Wine from '../resource/Images/wine.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Header() {
    const classes = useStyles();
    const userName = localStorage.getItem("name");

    return (
        <Grid className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems={'center'} justify={'space-between'}>
                        <Grid item>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <img src={Wine} alt="Wine" width="100" height="50" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" className={classes.title}>Wine Online</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" className={classes.title}>Hello {userName}</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Header
