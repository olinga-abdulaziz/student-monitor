import { Text,View,StyleSheet } from "react-native"
import TeacherTimeTable from '../Components/TeacherTimeTable'

export default function TeacherHome() {
   
    return(
        <View style={styles.container}>
             <View>
             <View style={styles.bodyBar}>
                     <View>
                         <View style={styles.cardBox}>
                             <Text style={{fontWeight:'bold',margin:1,fontSize:25}}>Teacher account</Text>
                             <Text style={{fontWeight:'bold',margin:1,fontSize:15}}>MOSES KARIUKI</Text>
                             <Text style={styles.commonBoldText}>CODE</Text>
                             <Text>tr3274</Text>
                         </View>
                             <View style={styles.tableView}>
                                 <View style={styles.timetableTXTView}><Text style={styles.timetableTXT}>My TIMETABLE</Text></View> 
                                 <View>
                                    <TeacherTimeTable />
                                </View>
                             </View>
                             
                     </View>
             </View>    
     </View>
        </View>
    )
}

const styles=StyleSheet.create({
 
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
       marginTop:20
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
        marginRight:'auto'
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
    },
    cardView:{
        
    }
   
})