import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ClassList({navigation}) {
    
    const data=[
        {
            time:"7:30 - 11:30",
            unit:"mathe matics for computer",
            room:"A22",
            classname:"csc6/023",
            id:"bjygsjhdfgvdgdfg"
        },
        {
            time:"1:30 - 3:30",
            unit:"entrepreneurship",
            room:"B17",
            classname:"csc6/023",
            id:"bjygsjhdfgvdrtytgdfg"
        },
        {
            time:"3:30 -5:30",
            unit:"mathematics for computer",
            room:"Lib 04",
            classname:"csc6/023",
            id:"bjygsjhdfetrygvdgdfg"
        },
        {
            time:"1:30 - 3:30",
            unit:"entrepreneurship",
            room:"B17",
            classname:"csc6/023",
            id:"bjygsjhddfhfgvdrtytgdfg"
        },
        {
            time:"3:30 -5:30",
            unit:"mathematics for computer",
            room:"Lib 04",
            classname:"csc6/023",
            id:"bjygsjhdhhdfetrygvdgdfg"
        },
   
 
    ]

    const Item=({time,unit,id,room,classname})=>{
        return(
            <TouchableOpacity 
             onPress={()=>navigation.navigate("classsRegister")}
            >
            <View style={styles.cardView}>
               <View>
                <Text style={{fontWeight:'bold',paddingBottom:20}}>{time}</Text>
               </View>
               <View>
                <Text>{unit}</Text>
                <Text>{classname}</Text>
                <Text>{room}</Text>
               </View>
            </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={{fontWeight:'400',fontSize:16}}>List of all my classes</Text>
                <Text style={{fontWeight:'400',fontSize:16}}>3/5/2024</Text>
            </View>
            <View style={{paddingBottom:80,paddingTop:20}}>
                <FlatList 
                    data={data}
                    renderItem={({item})=> <Item 
                    time={item.time}
                    unit={item.unit} 
                    id={item.id}
                    room={item.room}
                    classname={item.classname}
                     
                     />}
                    keyExtractor={item =>item.id}

                    />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    topBar:{
        padding:20,
        backgroundColor:'white'
    },
    cardView:{
        backgroundColor:'white',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:20,
        padding:20,
        borderRadius:10
    }

})