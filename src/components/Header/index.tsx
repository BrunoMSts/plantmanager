import React from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

import styles from './styles';

import userImg from '../../assets/Bruno.png'

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Lindo</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  )
};