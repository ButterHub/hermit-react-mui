import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'

export class home extends Component {
    static propTypes = {

    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h1">Hermit</ Typography>
                <Typography variant="h6">Collaborative decision making for the internet era.</Typography>
            </React.Fragment>
        )
    }
}

export default home
