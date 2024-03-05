import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View,Text,StyleSheet } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function SplashScreen() {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(function() {
            navigation.navigate('mainScreen')
        }, 2000);
    },[])

    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="chemical-weapon" size={100} color={"#8CC7F2"} />
            <View style={{}}>
                <Text> Student monitor</Text>
            </View >
           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    footerBr:{
        width:'100%',
        alignItems:'center',
        backgroundColor:"green",
    }
    
})