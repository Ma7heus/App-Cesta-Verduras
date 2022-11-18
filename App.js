import { StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native'; // O SAFE AREA VIEW CRIA UMA MARGEM PARA IPHONES, POIS O FORMATO DA TELA E DIFERENTE
import React from 'react';
import { useFonts,
   Montserrat_400Regular,
   Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "Montserrat_400Regular":Montserrat_400Regular,
    "Montserrat_700Bold":Montserrat_700Bold,
  });

  if (!fonteCarregada){ // verifica se a fonte foi carregada pra carregar a tela
    return <AppLoading/> // serve para carregar a tela de apploading enquanto a tela carrega
  }
  return (
    <View>
      <StatusBar/>
      <Cesta topo={mock.topo} detalhes={mock.detalhes} /* {...mock} tambem serve *//> 
    </View>
  );
}