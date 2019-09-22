import React from 'react'
import { Typography } from '@material-ui/core';

export default function missingPage() {
    return (
        <React.Fragment>
            <Typography color="secondary" variant="h3">Page not found.</Typography>
            <Typography color="primary" variant="h6">The page you're looking for doesn't exist or is temporarily unavailable.</Typography>
        </React.Fragment>
    )
}
