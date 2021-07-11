import { StatusBar, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: StatusBar.currentHeight,
	},

	title: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 38,
	},

	subtitle: {
		textAlign: 'center',
		fontSize: 18,
		paddingHorizontal: 20,
		color: colors.heading,
	},

	image: {
		width: 292,
		height: 284,
	},
})

export default styles;