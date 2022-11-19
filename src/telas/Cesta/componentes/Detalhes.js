import React from "react";
import { View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes({ nome, nomeFazenda, logofazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logofazenda} style={estilos.fazenda.imagemNomeFazenda}></Image>
            <Texto style={estilos.fazenda.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{ botao }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color:"#464646",
        fontSize:30,
        lineHeight:42,
        fontWeight: "bold",
        textAlign: "center"
    },fazenda:{
        flexDirection:"row",
        paddingVertical:10,

        imagemNomeFazenda:{
            width:50,
            height:50,
        },

        nomeFazenda:{
            fontSize:20,
            lineHeight:26,
            marginLeft:10,
        },
    },
    descricao:{
        color:"#A3A3A3A",
        fontSize:16,
        lineHeight:26,
        marginTop:10,
    },
    preco:{
        color:"#2A9F85",
        fontSize:40,
        fontWeight:"bold",
        lineHeight:42,
        marginTop:10
    },
    botao:{
        marginTop: 20,
        backgroundColor:"#2A9F85",
        paddingVertical: 20,
        borderRadius: 10,
    },
    textoBotao:{
        textAlign:"center",
        color: "#ffffff",
        fontSize:20,
        lineHeight:26,
        fontWeight: "bold",
    }
})