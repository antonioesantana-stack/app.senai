import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Secretaria() {
  return (
    <View style={styles.container}>
      
      {/* Logo do SENAI */}
      {/* Atenção: como estamos dentro da pasta 'screens', usamos '../' para voltar uma pasta e achar 'assets' */}
      <Image 
        source={require('../assets/image.png')} 
        style={styles.logo} 
      />

      {/* Caixa de Título SECRETARIA */}
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>SECRETARIA</Text>
      </View>

      {/* Lista de Opções */}
      <View style={styles.listaContainer}>
        
        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>Contatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>Segunda chamada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>Requerimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          {/* Dica: Corrigi um pequeno erro de digitação da imagem (Finaceiro -> Financeiro) */}
          <Text style={styles.textoLista}>Financeiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLista}>
          <Text style={styles.textoLista}>Relatório</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

// Estilos da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60B0FF', // Azul claro do fundo aproximado da sua imagem
    paddingTop: 60, // Dá o espaço no topo da tela (Safe Area)
    paddingHorizontal: 20, // Espaço nas laterais
  },
  logo: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
    alignSelf: 'flex-start', // Alinha a logo à esquerda
    marginBottom: 30,
  },
  tituloContainer: {
    backgroundColor: '#D9D9D9', // Cinza claro
    borderRadius: 30, // Bordas bem arredondadas
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 50,
    width: '85%',
    alignSelf: 'center', // Centraliza a caixa no meio da tela
  },
  tituloTexto: {
    fontSize: 16,
    color: '#000',
  },
  listaContainer: {
    flex: 1,
    gap: 30, // Cria um espaço uniforme entre cada item da lista
    paddingLeft: 10, // Dá um pequeno recuo para a lista não colar na borda
  },
  botaoLista: {
    paddingVertical: 5,
  },
  textoLista: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400', // Texto normal, sem ser negrito
  },
});