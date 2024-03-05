import { View,Text, StyleSheet,Button, TextInput, ScrollView } from "react-native"
import * as Progress from 'react-native-progress';
import StudentTimeTable from "./StudentTimeTable";


export default function StudentHome() {
    return(
        <View style={styles.container}>
            <View>
             
                    <View style={styles.bodyBar}>
                            <View>
                                <View style={styles.cardBox}>
                                <Text style={{fontWeight:'bold',margin:1,fontSize:25}}>Student account</Text>
                                <Text style={{fontWeight:'bold',margin:1,fontSize:15}}>MOSES KARIUKI</Text>
                                    <Text>CSC6/0342/24</Text>
                                    <Text style={styles.commonBoldText}>Fee balnce</Text>
                                    <Text>Ksh.4500</Text>
                                </View>
                                    <View style={styles.tableView}>
                                        <View style={styles.timetableTXTView}><Text style={styles.timetableTXT}>My Timetable</Text></View> 
                                        <StudentTimeTable />
                                    </View>
                            </View>
                    </View>
            </View>
       </View>
    )
}

const styles=StyleSheet.create({
    progressView:{
        padding:'10px',
        marginBottom:10
    },
    comonTxt:{
        color:'gray'
    },
    container:{
        flex:1,
    },

    commonBoldText:{
        fontWeight:'bold',
        color:'#8CC7F2',
        marginTop:10
    },
    bodyBar:{
       
    },

    detailView:{
        width:'100%',
        padding:'20px',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    cardBox:{
        width:'90%',
        height:'auto',
        padding:20,
        borderRadius:7,
        marginRight:'auto',
        backgroundColor:'white',
        paddingBottom:20,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20
    },
 
    tableView:{
        marginTop:10
    },
    timetableTXTView:{
        alignItems:"center",
        padding:10
    },
    timetableTXT:{
        fontWeight:'bold'
    }
   

})