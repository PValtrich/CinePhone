import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmes from '../../Listas'; //Importando lista de filmes
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Cinemas() {
  const navigation = useNavigation();

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#fff'}}>SOBRE</Text>
      </View>

      <View style={estilo.body}>
        <View style={estilo.bodyUp}>
          <View style={estilo.bodyUpLeft}>
            <Image
            source={require('../../../assets/Ação/Alfa.jpg')}
            style={estilo.cartaz}
            />
          </View>
          <View style={estilo.bodyUpRight}>
            <View style={estilo.bodyUpRightUp}>

            </View>
            <View style={estilo.bodyUpRightBelow}>
              
            </View>
          </View>
        </View>

        <View style={estilo.bodyBelow}>
          
        </View>
      </View>

      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            color='#14FF00'
            onPress={() => navigation.navigate('Filme')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10 }}>Pesquisar</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10 }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}