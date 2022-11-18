import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
    <Image style={estilos.topo} source={topo}/>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578/768 * width, // calculo com dimensoes da tela e da imagem
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize: 26,
        lineHeight:36,
        color:"white",
        fontWeight:"bold",
        padding:20,
    },
})