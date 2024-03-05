import { View,Text, StyleSheet,Button, TextInput, ScrollView, Pressable,FlatList } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


export default function Performance() {

   
    const navigation = useNavigation();

    const data=[
        {
            term:"TERM 1",
            cat1:"CAT 1",
            reslut1:"Distingtion",
            cat2:"CAT 2",
            reslut2:"Passed",
            cat3:"CAT 3",
            reslut3:"Failed"
        },
        {
            term:"TERM 2",
            cat1:"CAT 1",
            reslut1:"Distingtion",
            cat2:"CAT 2",
            reslut2:"Passed",
            cat3:"CAT 3",
            reslut3:"Failed"
        },
        {
            term:"TERM 3",
            cat1:"CAT 1",
            reslut1:"Distingtion",
            cat2:"CAT 2",
            reslut2:"Passed",
            cat3:"CAT 3",
            reslut3:"Failed"
        },
    ]

    const Item=({term,cat1,reslut1,cat2,reslut2,cat3,reslut3})=>{
        return(
            <View style={styles.blockD}>
                    <View style={styles.dayTitelView}>
                        <Text style={styles.txtDay}>{term}</Text>
                        <Text style={styles.txtDay}>...</Text>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{cat1}</Text>
                            <Text>{reslut1}</Text>
                        </View>
                        <View style={styles.block1}>
                                <MaterialCommunityIcons name="arrow-right-circle" color={"#8CC7F2"}  size={26} 
                                onPress={()=>navigation.navigate('result')}
                                />
                        </View>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{cat2}</Text>
                            <Text>{reslut2}</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <MaterialCommunityIcons name="arrow-right-circle" color={"#8CC7F2"}  size={26} />
                            </Pressable>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{cat3}</Text>
                            <Text>{reslut3}</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <MaterialCommunityIcons name="arrow-right-circle" color={"#8CC7F2"} size={26} />
                            </Pressable>
                        </View>
                    </View>   
                </View>
        )
    }
    return(
        <View style={styles.bobodyB}>
           <FlatList
                data={data}
                renderItem={({item})=> <Item 
                cat1={item.cat1} 
                cat2={item.cat2} 
                cat3={item.cat3}
                reslut1={item.reslut1}
                term={item.term}
                reslut2={item.reslut2}
                reslut3={item.reslut3} />}
                
                keyExtractor={item => item.term}
           />
            
        </View>
    )
}

const styles=StyleSheet.create({

    blockD:{
        padding:20,
        backgroundColor:'white',
        width:'96%',
        marginRight:'auto',
        marginLeft:'auto'
    },
    FlexBlock:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:20,
        borderBottomWidth:1,
        marginTop:10
    },
    txtDay:{
        fontWeight:'bold',
        marginBottom:6,
    },
    dayTitelView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    dayBlock:{
        marginBottom:20
    },
    bobodyB:{
        paddingBottom:220,
        marginTop:10
    }
})