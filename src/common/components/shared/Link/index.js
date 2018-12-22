import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

//Material UI
import { withStyles } from '@material-ui/core/styles'

//Styles
import styles from './style'

class GuttersGrid extends React.Component {
	render() {
		const { classes, to, text } = this.props

		return (
			<Fragment className={classes.content}>
				<Link to={to}>{text}</Link>
			</Fragment>
		)
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired,
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default withStyles(styles)(GuttersGrid)
