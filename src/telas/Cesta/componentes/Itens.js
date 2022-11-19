import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {lista.map(({ nome, imagem }) => {
            return <View style={estilos.item} key={nome}>
                <Image style={estilos.imagem} source={imagem} />
                <Texto style={estilos.tituloItem}>{ nome }</Texto>
            </View>
        })}
    </>
};

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alingItems: "center",
    },
    imagem: {
        width: 70,
        height: 70,
    },
    tituloItem: {
        color: "#464646",
        marginTop: 15,
        fontSize: 20,
    }
});

