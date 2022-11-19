import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Itens from './componentes/Itens';


export default function Cesta( {topo, detalhes, itens} ){
    // SACROWVIEW SERVE PARA A TELA NAO FICAR ESTATICA E "ROLAR"
    return <ScrollView> 
        <Topo {...topo}/>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta:{ // estilo de espacamento da view
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})