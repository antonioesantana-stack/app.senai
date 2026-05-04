import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

export default function App() {
  const [pesquisa, setPesquisa] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image 
          source={require('./assets/image.png')} 
          style={styles.logo} 
        />
      </View>

      {/* 2. Barra de Pesquisa */}
      <View style={styles.areaPesquisa}>
        <Text style={styles.iconeBusca}>🔍</Text>
        <TextInput
          style={styles.inputPesquisa}
          placeholder=""
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <View style={styles.botaoMais}>
          <Text style={styles.textoMais}>+</Text>
        </View>
      </View>

      <Text style={styles.textoBemVindo}>
        BEM VINDO AO MUNDO SENAI
      </Text>

      {/* 4. Lista de Botões */}
      <View style={styles.areaBotoes}>

        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>CALENDÁRIO</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>SECRETARIA</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>PORTAL</Text>
        </Pressable>

      </View>

    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60, // Dá um respiro no topo da tela
  },
  header: {
    marginBottom: 40,
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
  },
  areaPesquisa: {
    flexDirection: 'row',
    backgroundColor: '#F3E5F5', // Lilás bem clarinho
    width: '85%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 50,
  },
  iconeBusca: {
    fontSize: 16,
    marginRight: 10,
  },
  inputPesquisa: {
    flex: 1, // Faz o input ocupar o espaço que sobrar
    fontSize: 16,
  },
  botaoMais: {
    backgroundColor: '#E1BEE7', // Roxo claro
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoMais: {
    fontSize: 22,
    color: '#000',
  },
  textoBemVindo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  areaBotoes: {
    width: '100%',
    alignItems: 'center',
    gap: 25, // Espaço entre os botões
  },
  botao: {
    flexDirection: 'row', // Coloca ícone e texto lado a lado
    backgroundColor: '#0014CC', // Azul escuro padrão
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  iconeBotao: {
    fontSize: 22,
    marginRight: 15,
  },
  textoBotao: {
    color: '#fff', // Letra branca
    fontSize: 16,
    fontWeight: 'bold',
  },
});