import { View,Text, StyleSheet,Button } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function MainScreen({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.bodyBox}>
                <View style={{alignItems:'center',padding:40}}>
                    <MaterialCommunityIcons name="chemical-weapon" size={100} color={"white"} />
                </View>
                <View style={styles.BoxView}>
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
    BoxView:{
        backgroundColor:'white',
        paddingTop:30,
        paddingBottom:30,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:17,
        padding:40
    },
    bodyBox:{
        backgroundColor:"#8CC7F2",
        height:'100%',
        justifyContent:'center'
    }

  
})