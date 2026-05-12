import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Links({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/image.png')} 
        style={styles.logo} 
      />

      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>PORTAL DO ALUNO</Text>
      </View>

      <View style={styles.areaBotoes}>
        
        <TouchableOpacity style={styles.botaoLink} onPress={() => alert('Abrir site Meu SENAI')}>
          <Text style={styles.textoBotaoLink}>MEU SENAI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLink} onPress={() => alert('Abrir site da Biblioteca')}>
          <Text style={styles.textoBotaoLink}>BIBLIOTECA VIRTUAL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLink} onPress={() => alert('Abrir site do AVA')}>
          <Text style={styles.textoBotaoLink}>AMBIENTE VIRTUAL (AVA)</Text>
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
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  tituloContainer: {
    backgroundColor: '#0014CC',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  tituloTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaBotoes: {
    width: '100%',
    alignItems: 'center',
    gap: 20, 
  },
  botaoLink: {
    backgroundColor: '#F3E5F5', 
    width: '80%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0014CC', 
  },
  textoBotaoLink: {
    color: '#0014CC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#D9D9D9',
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