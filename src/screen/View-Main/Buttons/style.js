import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    view:{
        flexDirection:"row",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
    },
    viewbutton:{
        alignItems:"center",
        width:90,
        marginHorizontal:10,
    },
    textbutton:{
        color:"white",
    },
    background:{
        backgroundColor:"#4F88F8",
        width:70,
        height:70,
        margin:8,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    }
});

export default styles