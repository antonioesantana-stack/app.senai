import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Secretaria({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/image.png')} 
        style={styles.logo} 
      />

      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>SECRETARIA</Text>
      </View>

      <View style={styles.listaContainer}>
        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>CONTATOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>SEGUNDA CHAMADA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>REQUERIMENTOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>FINANCEIRO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>RELATÓRIO</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotaoVoltar}>VOLTAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fundo branco igual à tela Home
    paddingTop: 60, 
    paddingHorizontal: 20,
    alignItems: 'center', // Centraliza tudo na tela
  },
  logo: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  tituloContainer: {
    marginBottom: 40,
  },
  tituloTexto: {
    fontSize: 16,
    color: '#000', // Texto preto igual ao "BEM VINDO..."
    fontWeight: 'bold',
  },
  listaContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20, // Espaçamento entre os botões
  },
  botaoLista: {
    backgroundColor: '#0014CC', // O mesmo azul da tela Home
    width: '90%', // Largura do botão igual à Home
    paddingVertical: 15,
    borderRadius: 30, // Bordas arredondadas (estilo pílula)
    alignItems: 'center',
  },
  textoLista: {
    fontSize: 16,
    color: '#ffffff', // Texto branco dentro do botão azul
    fontWeight: 'bold', 
  },
  botaoVoltar: {
    backgroundColor: '#D9D9D9', // Mantivemos o cinza para o voltar
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 'auto', 
    marginBottom: 30,
    width: '50%',
  },
  textoBotaoVoltar: {
    color: '#000',
    fontWeight: 'bold',
  }
});