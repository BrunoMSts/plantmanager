import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

import styles from './styles';

import userImg from '../../assets/Bruno.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function loadStorageUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(user || '');
    }

    loadStorageUsername();
  }, [username])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{username}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  )
};