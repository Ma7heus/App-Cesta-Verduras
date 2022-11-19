import logo from "../../assets/logo.png";

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import abobora from '../../assets/frutas/Abobora.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';

const cesta = {
    topo:{
        titulo: "Detalhes da cesta",
    },
    detalhes:{
        nome: "Cesta de verduras",
        logofazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: " Uma cesta com produtos "
        + "selecionando cuidadosamente direto da fazenda para sua cozinha.",
        preco: "RS 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta;