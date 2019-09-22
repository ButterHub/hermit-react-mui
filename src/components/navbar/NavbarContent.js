import React from 'react'
import { AppBar, Toolbar, Typography, Link, Button, makeStyles, MuiThemeProvider } from '@material-ui/core';
import FaviconSvgImage from '../../img/favicon.svg'

const NavbarContent = () => {
    const classes = useStyles()
    const auth = false
    return (
        <div className={classes.root}>
            <AppBar elevation={0}>
                <Toolbar>
                    <Link href="/">
                    <img src={FaviconSvgImage} alt="Logo" style={
                        {
                            "color": "white",
                            "width": "40px",
                            "padding-right": "15px"
                    }
                        }></img>
                    </Link>
                    <Typography href="/" className={classes.title}>
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
                            <Button href="/public" color="inherit">Explore</Button>
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

export default NavbarContent
