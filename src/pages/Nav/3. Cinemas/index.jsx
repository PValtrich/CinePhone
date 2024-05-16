import React from 'react';
import { View, Text, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';


export default function Cinemas() {
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
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10}}>Pesquisar</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            color={'#14FF00'}
          />
          <Text style={{ fontSize: 10,
            color: '#14FF00',}}>CINEMAS</Text>
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