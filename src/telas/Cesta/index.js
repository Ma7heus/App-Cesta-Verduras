import React from 'react';
import { StyleSheet, View } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Itens from './componentes/Itens';

export default function Cesta( {topo, detalhes} ){
    return <>
        <Topo {...topo}/>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta:{ // estilo de espacamento da view
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})