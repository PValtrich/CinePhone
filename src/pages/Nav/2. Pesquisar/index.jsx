import React from 'react';
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';


export default function Pesquisar() {
  const navigation = useNavigation();

  return (
    <View style={estilo.nav}>
      <View style={estilo.iconav}>
        <Icon
          name='theaters'
          size={30}
          onPress={() => navigation.navigate('Filme')}
        />
        <Text style={{ fontSize: 10}}>FILMES</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='search'
          color={'#14FF00'}
          size={30}
        />
        <Text style={{ fontSize: 10,
          color: '#14FF00',}}>PESQUISAR</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='movie'
          size={30}
          onPress={() => navigation.navigate('Cinemas')}
        />
        <Text style={{ fontSize: 10}}>CINEMAS</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='person'
          size={30}
          onPress={() => navigation.navigate('Perfil')}
        />
        <Text style={{ fontSize: 10}}>PERFIL</Text>
      </View>
    </View>
  );
}
