import {React, useEffect} from "react"
import {View,Text,Image,Linking, BackHandler, ScrollView, Dimensions} from "react-native"
import styles from "./style";
import Form from "./Form";
import Title from "./Title";


export default function Signin ({navigation}){
        
    return(
        <View style={styles.linearGradient}>
            <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems:'center'}} style={{height : Dimensions.get('window').height,}}>
            <Title/>
            <Form/>
            <Text style={styles.text} onPress={() => navigation.navigate('Signup')}>Não tem uma conta? Cadastre-se</Text>
            </ScrollView>
        </View>
    );
}