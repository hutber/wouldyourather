import { defaultTheme } from '../../components/themes'

export default theme => ({
	content: {
		background: 'var(--viewportColour)',
		color: 'var(--base)',
		height: '100vh',
		width: '100vw',
		overflow: 'hidden'
	},
	grid: {
		...defaultTheme.root
	}
})
