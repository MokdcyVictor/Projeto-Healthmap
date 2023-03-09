import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    background:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        borderBottomColor:"#1E54BD",
        borderBottomWidth:2,
    },
    text:{
        color:"white",
    },
    textContent:{
        marginLeft:5,
        width:50,
        height:40,

    },
    perfil:{
        backgroundColor:"#D9D9D9",
        borderRadius:40,
        width:40,
        height:40,
    },
    logo:{
        marginLeft:80,
        marginRight:0,
    }
});

export default styles