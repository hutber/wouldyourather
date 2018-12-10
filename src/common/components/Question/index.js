import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

//Components
import Giphy from '../Giphy'

//Styles
import styles from './style'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<section className={classes.content}>
				<Grid container className={classes.grid} direction="column" alignItems="center">
					<Grid item xs={12}>
						<Giphy />
					</Grid>
					<Grid item xs={12}>
						Batman
					</Grid>
					<Grid item xs={12}>
						Or
					</Grid>
					<Grid item xs={12}>
						Superman
					</Grid>
				</Grid>
			</section>
		)
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
