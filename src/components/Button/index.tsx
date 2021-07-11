import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';

import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
	title: string;
}

export default function Button({title, ...props}: ButtonProps) {
	return (
		<TouchableOpacity 
			style={styles.container}
			{...props}
		>
			<Text style={styles.text}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

