import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        width:"100%",
        height:"auto",
        borderRadius:0,
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
        width:300,
        height:200,
        borderRadius:20,
        alignSelf:"center",
        marginBottom:'10%',
    },
    map: {
        width: '100%',
        height: '50%',
        marginBottom:'5%',
      },
});

export default styles