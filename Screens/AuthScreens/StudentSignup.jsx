import { useNavigation } from "@react-navigation/native";
import { Text, View,StyleSheet,TextInput,Button } from "react-native";

export default function Studentsignup() {
    const navigation=useNavigation()
    return(
        <View style={styles}>
            <View style={styles.bodyBox}>
                
                <View style={styles.bodyView}>
                    <View style={styles.topBar}>
                        <Text style={styles.stdText}>Create account</Text>
                        <Text>Fill in the form with correct details of yourself</Text>
                    </View>
                    <View style={styles.formView}>
                        <TextInput style={styles.txtINput} placeholder="First name" />
                    </View>
                    <View style={styles.formView}>
                        <TextInput style={styles.txtINput} placeholder="Last name" />
                    </View>
                    <View style={styles.formView}>
                        <TextInput style={styles.txtINput} placeholder="Admision number" />
                    </View>
                    <View style={styles.formView}>
                        <TextInput style={styles.txtINput} placeholder="Course" />
                    </View>
                    <View style={styles.formView}>
                        <TextInput style={styles.txtINput} placeholder="username" />
                    </View>
                    <View style={styles.formView}>
                        <TextInput secureTextEntry={true} style={styles.txtINput} placeholder="Password" />
                    </View>
                    <View style={styles.formView}>
                        <Button title="Login" 
                        onPress={()=>navigation.navigate('studentDashboard')} />
                    </View>
                    <View style={styles.formView}>
                        <Button title="Login" color={"green"}
                        onPress={()=>navigation.navigate('studentLogin')} />
                    </View>
                </View>
           </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        justifyContent:'center'
    },
    stdText:{
        color:'#8CC7F2',
        fontWeight:'bold',
        fontSize:20
    },
    topBar:{
        width:'100%',
        height:'10rem',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    bodyView:{
        width:'90%',
        backgroundColor:"white",
        height:'auto',
        padding:20,
        backgroundColor:'aliceblue',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        paddingTop:30,
        borderRadius:17
    },
    formView:{
        marginBottom:20,
    },
    txtINput:{
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        padding:5,
        paddingLeft:10
    },
    bodyBox:{
        backgroundColor:"#8CC7F2",
        height:'100%',
        justifyContent:'center'
    }
})