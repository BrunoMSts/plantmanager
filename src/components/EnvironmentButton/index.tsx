import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

type EnvironmentButtonProps = RectButtonProps & {
  title: string;
  active?: boolean;
};

export default function EnvironmentButton({
  title,
  active = false,
  ...props
}: EnvironmentButtonProps) {
  return (
    <RectButton 
      style={[styles.container, active && styles.containerActive]}
      {...props}
    >
      <Text style={[styles.text, active && styles.textActive]}>
        { title }
      </Text>
    </RectButton>
  );
};