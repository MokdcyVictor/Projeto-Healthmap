import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        width:"100%",
        height:1000,
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
    },
    conteudo:{
        width:200,
        height:100,
        borderRadius:15,
        margin:20,
        borderWidth:1,
        borderColor:'#CCCCCC',
    },
    img:{
        width:40,
        height:40
    },
    txt:{
        color:'#3173F3',
        fontSize:12,
        textAlign:'center'
    }
});

export default styles