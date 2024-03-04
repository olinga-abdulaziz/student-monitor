import { View,Text, StyleSheet,Button } from "react-native"

export default function MainLogin({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.bodyBox}>
                <View style={styles.topBox}>
                    <Text style={styles.stdText}>Login to student monitor portal</Text>
                </View>
                <View style={styles.btnView}>
                        <View style={styles.btnbtnView}>
                        <Button title="Student" 
                            onPress={()=> navigation.navigate('studentLogin')}
                        />
                        </View>
                        <View style={styles.btnbtnView}>
                            <Button title="Teacher"
                            onPress={()=>navigation.navigate('teacherLogin')}
                            />
                        </View>
                        <View style={styles.btnbtnView}>
                            <Button title="Parent" 
                            onPress={()=>navigation.navigate('parentLogin')}
                            />
                        </View>
                </View>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    topBox:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20
    },
    stdText:{
        color:'#8CC7F2',
        fontWeight:'bold',
        fontSize:20
    },
    btnView:{
        width:'80%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    btnbtnView:{
        paddingBottom:20
    },
    bodyBox:{
        backgroundColor:'aliceblue',
        paddingTop:30,
        paddingBottom:30,
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:10
    }

  
})