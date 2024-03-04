import { View,Text, StyleSheet,Button, TextInput } from "react-native"

export default function TeacherLogin() {

    return(
        <View style={styles.container}>
        <View style={styles.bodyBox}>
             
             <View style={styles.bodyView}>
                 <View style={styles.topBar}>
                     <Text style={styles.stdText}>Teachers Login</Text>
                 </View>
                 <View style={styles.formView}>
                     <TextInput style={styles.txtINput} placeholder="Username" />
                 </View>
                 <View style={styles.formView}>
                     <TextInput secureTextEntry={true} style={styles.txtINput} placeholder="Password" />
                 </View>
                 <View style={styles.formView}>
                     <Button title="Login" />
                 </View>
             </View>
        </View>

     </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
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
        marginTop:'5rem',
        paddingTop:30
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
    }
    
})