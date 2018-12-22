import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import styles from './style'

//Components
import Question from '../../components/Question'
import Menu from '../../components/Menu'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<section className={classes.content}>
				<Grid container className={classes.grid}>
					<Grid item xs={4}>
						One
					</Grid>
					<Grid item xs={4}>
						<Question />
					</Grid>
					<Grid item xs={4}>
						<Menu />
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
