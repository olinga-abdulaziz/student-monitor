import { View,Text, StyleSheet,Button, TextInput, ScrollView } from "react-native"

  import * as Progress from 'react-native-progress';
  import Performance from "./Performance";

export default function ProgressPage() {
    
    return(
        <View style={styles.container}>
            <View style={styles.progressView}>
                <View style={{alignItems:'center',marginBottom:10}}><Text>Term progress</Text></View>
                <Progress.Pie  style={styles.pichart} progress={0.6} size={70} />
                <View style={{alignItems:'center',marginTop:10}}><Text>60%</Text></View>
            </View>
           <View style={{padding:10}}>
                <Text style={styles.perTXT}>My performance</Text>
           </View>
           <View>
                <Performance />
           </View>
            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1
    },
    cahrtView:{
        paddingBottom:50
    },
    
    progressView:{
        padding:30,
        alignItems:'center'
    },
    perTXT:{
        fontWeight:'bold',
        color:'#8CC7F2'
    }
})