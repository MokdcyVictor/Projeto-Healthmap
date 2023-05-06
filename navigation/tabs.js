import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, Touchable,Text } from 'react-native';

import ViewMain from '../src/screen/View-Main/index'
import ViewMap from '../src/screen/View-Map';
import ViewUser from '../src/screen/View-User/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Tabs() {
    const Tab = createBottomTabNavigator()

 return (
    <Tab.Navigator backBehavior='initialRoute' initialRouteName='Menu' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
                position:'absolute',
                borderTopWidth:1,
                borderTopColor:'#3173F3',
                borderTopStartRadius:10,
                borderTopEndRadius:10,
                backgroundColor: '#3173F3',
                height:'10%',
        }
    }}>
        <Tab.Screen name='Mapa' component={ViewMap} options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
                <View>
                    <Image 
                    source={require('../assets/map.png')} 
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height:40,
                        tintColor: focused ? 'white' : 'white',
                        
                    }}
                    />
                    <Text style={{
                        color: focused ? 'white' : 'white',
                        fontSize: 15,

                    }}>
                        Mapa
                    </Text>
                </View>
            ),
            }}></Tab.Screen>
                    <Tab.Screen name='Menu' component={ViewMain} options={{
            headerShown:false,
            tabBarIcon: ({focused}) =>(
                <View>
                    <Image source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width:40,
                                height:40,
                                tintColor: focused ? 'white' : 'white',
                            }} 
                    />
                    <Text style={{
                        color: focused ? 'white' : 'white',
                        fontSize: 15,

                    }}>
                        Menu
                    </Text>
                </View>
                
            ),
        }}></Tab.Screen>
        <Tab.Screen name='Perfil' component={ViewUser} options={{
            headerShown:false,
            tabBarIcon:({focused})=>(
                <View style={{justifyContent:"center", alignItems:'center'}}>
                    <Image 
                    source={require('../assets/person.png')} 
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height:40,
                        tintColor: focused ? 'white' : 'white',
                    }}
                    />
                    <Text style={{
                        color: focused ? 'white' : 'white',
                        fontSize: 13,

                    }}>
                        Perfil
                    </Text>
                </View>
            ),
            
            }} />
    </Tab.Navigator>
  );
}