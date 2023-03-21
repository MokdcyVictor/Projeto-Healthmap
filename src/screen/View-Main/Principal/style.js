import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        width:"100%",
        height:"auto",
        borderRadius:20,
    },
    ballscontent:{
        flexDirection:"row",
        alignItems:"center",

    },
    Input:{
        marginTop:30,
        padding:10,
        margin:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:20,
        backgroundColor:"#D9D9D9",
    },
    balls:{
        backgroundColor:"#D9D9D9",
        width:50,
        height:50,
        borderRadius:100,
        margin:20,
    },
    text:{
        marginLeft:20,
        marginTop:20,
    },
    location:{
        backgroundColor:"#D9D9D9",
        marginTop:20,
        width:300,
        height:200,
        borderRadius:20,
        alignSelf:"center"
    },
    map: {
        width: '100%',
        height: '100%',
      },
});

export default styles