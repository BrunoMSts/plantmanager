import React, { useState, useEffect } from 'react';
import {
  View, 
  Text, 
  Image
} from 'react-native';

import Header from '../../components/Header';

import styles from './styles'

import waterDrop from '../../assets/waterdrop.png'
import { FlatList } from 'react-native-gesture-handler';
import { PlantProps, loadPlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      )

      setMyPlants(plantsStoraged);
      setLoading(false)
    }

    loadStorageData();
  }, [])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image 
          source={waterDrop} 
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList 
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex: 1}}
        />
      </View>
    </View>
  )
}