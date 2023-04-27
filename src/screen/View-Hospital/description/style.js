import { StyleSheet,useWindowDimensions } from "react-native";


const styles = StyleSheet.create({
    background:{
        paddingTop:20,
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        alignItems:'baseline',
    },
    buttom:{
        backgroundColor:"#3173F3",
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
        marginHorizontal:30,
        alignItems:'flex-start',
    }
});

export default styles