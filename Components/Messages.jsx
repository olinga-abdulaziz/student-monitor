
import { View,Text, StyleSheet,Button, TextInput, ScrollView, TouchableOpacity,FlatList } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Messages() {
    

        const data=[
            {
                message:"Lorem ipsum dolor sit, amet consectetur  architecto.",
                id:"Abdul"
            },
            {
                message:"Lorem ipsum dolor sit, amet consectetur  architecto.",
                id:"Joshua"
            },
            {
                message:"Lorem ipsum dolor sit, amet consectetur  architecto.",
                id:"Moses"
            }
        ]

        const Item = ({chat,id}) => (
                <View>
                    <View  style={styles.chatItemMe} >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <MaterialCommunityIcons name="account" size={30} /> 
                            <Text>{id}</Text>
                        </View>
                            <Text style={styles.chatTxt}>{chat}</Text>
                    </View>
                </View>
                
        );

       
    return(
        
        <View style={styles.container}>
            <View style={styles.TopBox}>

            </View>
            <View style={styles.BodyBox}>
            <FlatList
                data={data}
                renderItem={({item}) => <Item id={item.id} chat={item.message} />}
                keyExtractor={item => item.id}
            />
            </View>
            <View style={styles.FooterBox}>
                <TextInput style={styles.inpt} placeholder="Type message"/>
                <TouchableOpacity 
                 
                ><MaterialCommunityIcons name="send" size={30} color={"green"} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    FooterBox:{
        bottom:0,
        position:'absolute',
        paddingBottom:10,
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    inpt:{
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        padding:5,
        paddingLeft:10,
        width:'90%'
    },
 
    chatItemMe:{
        width:'85%',
        backgroundColor:'#8CC7F2',
        padding:10,
        borderRadius:9,
        marginBottom:10,

    },
    chatTxt:{
        color:'white',
        fontSize:17
    },
    BodyBox:{
        padding:10
    }
})