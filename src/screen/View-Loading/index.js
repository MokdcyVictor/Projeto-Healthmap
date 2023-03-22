import {React,useEffect} from 'react';
import { View, BackHandler } from 'react-native';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';



export default function ViewLoading() {

    const navigation = useNavigation()


 return (
    <Lottie source={require('./splash.json')} autoPlay loop={false} speed={0.7} onAnimationFinish={()=> navigation.navigate("Signin") } />
 );
}