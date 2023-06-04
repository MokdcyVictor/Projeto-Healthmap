import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flexDirection:"row",
        paddingHorizontal:15,
        width:'100%',
        height:180,
        marginTop:20,
        justifyContent:'space-between'
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
        alignItems:'flex-start',
        backgroundColor:"#D9D9D9",
        borderRadius:40,
        width:40,
        height:40,
    },
    logo:{
        justifyContent:'flex-start',
        alignItems:'flex-end',
        width:50,
        height:50,
    }
});

export default styles