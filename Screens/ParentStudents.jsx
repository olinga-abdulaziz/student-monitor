import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";

export default function ParenetStudents() {
    const navigation=useNavigation()
    
    const data=[
        {
            name:"Abdulaziz",
            adm:"467dtg5t"
        },
        {
            name:"Shani",
            adm:"46fghf7dtg5t"
        },
        {
            name:"salima",
            adm:"467dtgfdh5t"
        },
    ]

    const Item=({name,adm})=>{
        return(
            <TouchableOpacity 
            onPress={()=>navigation.navigate('parentDashboard')}
            >
            <View style={styles.cardView}>
                <View>
                    <Text style={{fontWeight:'bold'}}>{name}</Text>
                    <Text>{adm}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.conatiner}>
            <View style={styles.topBar}>
                <View style={styles.cardBox}>
                    <Text style={{fontWeight:'bold',margin:1,fontSize:25}}>Parent account</Text>
                    <Text style={{fontWeight:'bold',margin:1,fontSize:15}}>Joseph murithi</Text>
                    <Text>07566789</Text>
                </View>
            </View>
            <View style={styles.BodyBar}>
                <View style={{alignItems:'center',padding:20}}>
                    <Text>List of all your stuydent registerd in the app</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Item name={item.name} adm={item.adm}/>}
                    keyExtractor={item =>item.adm} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        padding:10
    },
    topBar:{
        marginTop:50,
        padding:10
    },
    cardBox:{
        width:'100%',
        height:'auto',
        padding:20,
        borderRadius:7,
        marginRight:'auto',
        backgroundColor:'aliceblue',
        paddingBottom:20,
        marginLeft:'auto',
        marginRight:'auto'
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