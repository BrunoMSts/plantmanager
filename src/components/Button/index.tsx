import React, { ButtonHTMLAttributes } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & TouchableOpacityProps

export default function Button({ title, ...props }: ButtonProps) {
	return (
	<TouchableOpacity 
		style={styles.button}
		activeOpacity={0.6}
		{...props}
	>
		<Text style={styles.buttonText}>
			{title}
		</Text>
	</TouchableOpacity>
	)
}

