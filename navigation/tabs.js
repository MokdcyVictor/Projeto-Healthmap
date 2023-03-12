import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, Touchable } from 'react-native';

import ViewMain from '../src/screen/View-Main/index'
import ViewConfig from '../src/screen/View-Config/index'
import ViewUser from '../src/screen/View-User/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomTabBarButton = ({children, onPress}) =>(
    <TouchableOpacity style={{
        top: -20,
        justifyContent:'center',
        alignItems:'center'
    }}
    onPress={onPress} >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'#1E54BD'
        }} >
            {children}
        </View>
    </TouchableOpacity>
);

export default function Tabs() {
    const Tab = createBottomTabNavigator()

 return (
    <Tab.Navigator initialRouteName='Main' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
                position:'absolute',
                borderTopWidth:1,
                borderTopColor:'#1E54BD',
                background: '#fffffff',
                height:'10%',
        }
    }}>
        <Tab.Screen name='Config' component={ViewConfig} options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
                <View>
                    <Image 
                    source={require('../assets/setting.png')} 
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height:40,
                        tintColor: focused ? '#1E54BD' : '#1E54BD',
                    }}
                    />
                </View>
            ),
            }}></Tab.Screen>
                    <Tab.Screen name='Main' component={ViewMain} options={{
            headerShown:false,
            tabBarIcon: ({focused}) =>(
                <Image source={require('../assets/home.png')}
                resizeMode='contain'
                style={{
                    width:30,
                    height:30,
                    tintColor: '#fff'
                }} />
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
            )
        }}></Tab.Screen>
        <Tab.Screen name='Users' component={ViewUser} options={{
            headerShown:false,
            tabBarIcon:({focused})=>(
                <View>
                    <Image 
                    source={require('../assets/person.png')} 
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height:40,
                        tintColor: focused ? '#1E54BD' : '#1E54BD',
                    }}
                    />
                </View>
            ),
            
            }} />
    </Tab.Navigator>
  );
}