import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

export default function Calendario({ navigation }) {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/image.png')} 
        style={styles.logo} 
      />

      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>CALENDÁRIO ACADÊMICO</Text>
      </View>

      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#0014CC', 
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#0014CC',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            arrowColor: '#0014CC',
            monthTextColor: '#0014CC',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTexto}>
            {selected ? `Dia selecionado: ${selected.split('-').reverse().join('/')}` : "Selecione uma data para ver os eventos"}
        </Text>
      </View>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tituloContainer: {
    backgroundColor: '#0014CC',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  calendarWrapper: {
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#fff',
    padding: 10,
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F3E5F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  infoTexto: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  botaoVoltar: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 'auto', 
    marginBottom: 30,
    width: '50%',
    alignSelf: 'center',
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  }
});