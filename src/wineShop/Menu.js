import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Content from './Content';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        top: 'auto',
        '& .MuiList-root': {
            padding: '0px'
        }
    },
    buttonStyle: {
        textTransform: 'none',
        padding: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
        justifyContent: 'center',
        borderRadius: '0px',
        '& .MuiButton-root:hover': {
            backgroundColor: 'none'
        }
        
    }, 
    gridBcg: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: 'white'
        }
    }
}));

function Menu({ addUser, signup, ...props }) {
    const classes = useStyles();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [areaDisplay, setAreaDisplay] = useState(0)

    useEffect(() => {
        setBtnDisabled(!signup)
    }, [signup])

    useEffect(() => {
        if (signup)
            setAreaDisplay(1);
        else
            setAreaDisplay(0);
    }, [signup])

    const addNewUser = (user) => {
        addUser(user);
        areaDisplay(1);
    }

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Grid className={classes.gridBcg} >
                    <Button disabled={signup} className={classes.buttonStyle} onClick={() => setAreaDisplay(0)}>
                        Signup
                    </Button>
                </Grid>

                <Divider />

                <Grid className={classes.gridBcg} onClick={btnDisabled ? () => alert("Please sign up first!") : undefined }>
                    <Button disabled={btnDisabled} className={classes.buttonStyle} onClick={() => setAreaDisplay(1)}>
                        Start shopping
                    </Button>
                </Grid>
                <Divider />

                <Grid className={classes.gridBcg} onClick={ btnDisabled ? () => alert("Please sign up first!") : undefined }>
                    <Button disabled={btnDisabled} className={classes.buttonStyle} onClick={() => setAreaDisplay(2)}>
                        Feedback
                    </Button>
                </Grid>
                <Divider />
            </Drawer>

            <Content addNewUser={addUser} signup={signup} areaDisplay={areaDisplay} resetUser={props.resetUser} />

        </div>
    )
}

export default Menu
