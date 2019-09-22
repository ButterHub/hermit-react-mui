import React from 'react'
import { AppBar, Toolbar, Typography, Link, Button, makeStyles } from '@material-ui/core';

const Navbar = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.title}>
                        Hermit
                    </Typography>
                    <Button color="inherit">Me</Button>
                    <Button color="inherit">Invites</Button>
                    <Button color="inherit">Explore</Button>
                    <Button color="inherit">User</Button>
                    <Button color="inherit">Sign out</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
}))

export default Navbar
