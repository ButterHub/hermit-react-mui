import React from 'react'
import { AppBar, Toolbar, Typography, Link, Button, makeStyles } from '@material-ui/core';

const Navbar = () => {
    const classes = useStyles()
    const auth = false
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.title}>
                        Hermit
                    </Typography>
                    {auth && (
                        <React.Fragment>
                            <Button color="inherit">Me</Button>
                            <Button color="inherit">Invites</Button>
                            <Button color="inherit">Explore</Button>
                            <Button color="inherit">FirstName</Button>
                            <Button href="/login" color="inherit">Log in</Button>
                        </React.Fragment>
                    )}
                    {!auth && (
                        <React.Fragment>
                            <Button color="inherit">Explore</Button>
                            <Button href="/join" color="inherit">Join</Button>
                        </React.Fragment>
                    )}
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
