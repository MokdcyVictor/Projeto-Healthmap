import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    context: {
        marginTop:100,
        backgroundColor:"white",
        width:298,
        height:283,
        borderRadius:10,
        alignItems:"center",

      },
    Input:{
        height:40,
        width:250,
        marginTop:20,
        fontSize:15

    },
    hyperlinkStyle:{
        alignSelf:'flex-end',
        textAlign:"right",
        margin:10,
        marginRight:30,
        color:"#777777",
    },
    Button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:250,
        backgroundColor:"#3173F3",
        marginTop:10,
        height:50,
    },
    textButton:{
        color:"white",

    },
});

export default styles