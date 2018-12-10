import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'

//Components

//Styles
import styles from './style'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return <section className={classes.content} />
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
