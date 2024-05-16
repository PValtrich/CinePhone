import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login_Signup from '../pages/1. Login_Signup'
import Signup from '../pages/2. Signup';
import Login from '../pages/3. Login';
import Filme from '../pages/Nav/1. Filme';
import Cinemas from '../pages/Nav/3. Cinemas';
import Perfil from '../pages/Nav/4. Perfil';
import Pesquisar from '../pages/Nav/2. Pesquisar';
import Filmes from '../pages/4. Filmes';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Filmes'
            component={Filmes}
            options={{headerShown: false}}
            />
            
            <Stack.Screen
            name='Login_Signup'
            component={Login_Signup}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='Signup'
            component={Signup}
            options={{headerShown: false}}
            />

             <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='Pesquisar'
            component={Pesquisar}
            options={{headerShown: false}}
            />

             <Stack.Screen
            name='Cinemas'
            component={Cinemas}
            options={{headerShown: false}}
            />  

             <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{headerShown: false}}
            />

       

            <Stack.Screen
            name='Filme'
            component={Filme}
            options={{headerShown: false}}
            />
        </Stack.Navigator> 
    )
}