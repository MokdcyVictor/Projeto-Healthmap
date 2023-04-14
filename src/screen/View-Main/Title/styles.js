import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    background:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        borderBottomColor:"#1E54BD",
        borderBottomWidth:2,
        width:'100%',
        height:'auto',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:"white",
        marginLeft:10,
        width:'50%',
        height:'auto',
    },
    perfil:{
        justifyContent:'flex-start',
        backgroundColor:"#D9D9D9",
        borderRadius:40,
        width:40,
        height:40,
    },
    logo:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:'40%',
        height:'30%',
    }
});

export default styles