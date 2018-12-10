import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import styles from './style.module.css'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { defaultTheme } from '../../themes'

const HeaderText = props => {
	const customVariantsForMaterialUI = ['display6']
	const newVariant = props.variant && props.variant.includes(customVariantsForMaterialUI) ? null : props.variant ? props.variant : 'body1'
	const newAlign = props.align ? props.align : 'center'
	const newClass = newVariant === null ? styles[props.variant] : null
	const theme = props.theme ? props.theme : defaultTheme
	const additionalClass = props.hasfunfetti ? styles.styledHeadline : ''

	return (
		<MuiThemeProvider theme={theme}>
			<Typography {...props} className={`${newClass} ${additionalClass}`} variant={newVariant} align={newAlign}>
				{props.children}
			</Typography>
		</MuiThemeProvider>
	)
}

HeaderText.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired
}

export default HeaderText
