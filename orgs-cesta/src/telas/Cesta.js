import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width;
export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}></Image>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$40,00</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: 'white',
        paddingTop: 16,
        fontWeight: 'bold',
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
        borderRadius: 5,
    },
    descricao: {
        width: '100%',
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})