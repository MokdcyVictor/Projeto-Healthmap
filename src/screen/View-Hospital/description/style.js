import { StyleSheet } from "react-native";
import { AlignJustify } from "react-native-feather";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        width:"100%",
        height:"auto",
        alignItems:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    buttom:{
        backgroundColor:"#3173F3",
        marginTop:150,
        borderRadius:30,
        width:300,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
    },
    textButton:{
        color:"white",
        fontSize:20,
    },
    text:{
        fontSize:40,
    },
    information:{
        marginTop:30,
        margin:40,
        alignItems:'flex-start',
    }
});

export default styles