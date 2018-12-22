import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

//Material UI
import { withStyles } from '@material-ui/core/styles'

import paths from '../../../config/paths'

//Styles
import styles from './style'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<nav className={classes.content}>
				<Link to={paths.signin.home}>Login</Link>
			</nav>
		)
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
