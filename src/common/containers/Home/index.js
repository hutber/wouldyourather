import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { defaultTheme } from '../../components/themes'

//Styles
import './style.css'

class GuttersGrid extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<Fragment>
				<section className="content">
					<Grid container className={classes.root}>
						<Grid item xs={4}>
							One
						</Grid>
						<Grid item xs={4}>
							two
						</Grid>
						<Grid item xs={4}>
							three
						</Grid>
					</Grid>
				</section>
			</Fragment>
		)
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(defaultTheme)(GuttersGrid)
