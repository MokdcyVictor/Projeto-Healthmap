import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        height:200,
        paddingBottom:5,
        justifyContent:'space-between',
    },
    img:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        resizeMode:'cover',
        width:'100%',
        height: 'auto',
    },
    return:{
        width:50,
        padding:6,
        alignSelf:'flex-start',
    },
    container:{
        width:'100%',
        height:30,
    }
});

export default styles