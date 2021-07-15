import React from 'react';
import { 
  Text,
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import styles from './styles'

type PlantProps = RectButtonProps & {
  data: {
    name: string;
    photo: string;
  }
}

const PlantCardPrimary = ({data, ...props}: PlantProps) => {
  return (
    <RectButton
      style={styles.container}
      {...props}
    >
      <SvgFromUri 
        uri={data.photo}
        width={70}
        height={70}
      />
      <Text style={styles.text}>
        { data.name }
      </Text>
    </RectButton>
  )
}

export default PlantCardPrimary;