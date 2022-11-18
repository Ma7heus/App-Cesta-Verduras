import React from "react";
import { StyleSheet, Text } from "react-native";


export default function Texto( { children, style } ){
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito
    }

    return <Text style={[style, estilo]}> {children} </Text> //passo uma array com o children e o style, o style serve para o stylke criado na pagina nao seja ignorado
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "Montserrat_400Regular",
        fontWeight: "normal",
    },
    textoNegrito:{
        fontFamily:"Montserrat_700Bold",
        fontWeight: "normal",
    }
})