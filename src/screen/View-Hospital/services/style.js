import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        height:60,
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    button:{
        backgroundColor:'white',
        width:'100%',
        height:"100%",
        alignItems:'center',
        justifyContent:'flex-end',
    },
});

export default styles