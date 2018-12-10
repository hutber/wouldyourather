import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import styles from './style'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.content}>
				<img src="https://media.giphy.com/media/wkHNGECdJV9ks/giphy.gif" />
			</div>
		)
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
