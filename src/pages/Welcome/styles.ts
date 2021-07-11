import { 
	StatusBar, 
	StyleSheet,
	Dimensions,
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},

	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: 20,
	},

	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 38,
		fontFamily: fonts.heading,
		lineHeight: 34,
	},

	subtitle: {
		textAlign: 'center',
		fontSize: 18,
		paddingHorizontal: 20,
		color: colors.heading,
		fontFamily: fonts.text,
	},

	image: {
		height: Dimensions.get('window').width * 0.7,
	},

	button: {
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		marginBottom: 20,
		width: 56,
		height: 56,
	},

	buttonIcon: {
		color: colors.white,
		fontSize: 32,
	},
})

export default styles;