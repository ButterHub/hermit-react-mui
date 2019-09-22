import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const Home = props => {
        return (
            <React.Fragment>
                <Typography color="secondary" variant="h1">Hermit</ Typography>
                <Typography color="primary" variant="h6">Collaborative decision making for the internet era.</Typography>
                <Typography>Development of this app started on September 22nd 2019. If you know the author, he'll probably let you know when its ready.</Typography>
                {/* <Typography>{Array.from({length: 20}, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisl nec bibendum pharetra. Fusce eu eros sit amet ex commodo rutrum. Nam pulvinar velit vitae massa posuere imperdiet. Vivamus mi tortor, lacinia et ultricies nec, ornare at est.").join('\n')}</Typography> */}
            </React.Fragment>
        )
}

Home.propTypes = {

}
export default Home

export { Home }