import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaInicial () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>
        Tela inicial 
      </Text>
    </View>
  );
}