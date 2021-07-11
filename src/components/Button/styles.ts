import { StyleSheet } from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		marginBottom: 10,
		paddingBottom: 4,
		width: 56,
		height: 56,
	},

	buttonText: {
		color: colors.white,
		fontSize: 24,
	},
})

export default styles;