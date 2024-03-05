import { View,Text, StyleSheet,Button, TextInput, ScrollView,FlatList } from "react-native"

export default function TeacherTimeTable() {
    const data=[
        {
            day:"Monaday",
            time1:"7:30-9-30",
            room1:"A26",
            time1Value:"Mathematics fro computer science",
            time2:"9:30-11:30",
            room2:"B14",
            time2Value:"Entrepreneurship",
            time3:"11:30-1:30",
            room3:"Lib7",
            time3Value:"Basic Electronics",
            time4:"1:30-3:30",
            room4:"A16",
            time4Value:"Communication Skills",
            time5:"3:30-5:30",
            room5:"A07",
            time5Value:"Numeracy",
        },
        {
            day:"Tuesday",
            time1:"7:30-9-30",
            room1:"Lib 13",
            time1Value:"Mathematics fro computer science",
            time2:"9:30-11:30",
            room2:"B10",
            time2Value:"Entrepreneurship",
            time3:"11:30-1:30",
            room3:"B04",
            time3Value:"Basic Electronics",
            time4:"1:30-3:30",
            room4:"A22",
            time4Value:"Communication Skills",
            time5:"3:30-5:30",
            room5:"A15",
            time5Value:"Numeracy",
        },
        {
            day:"Wednesday",
            time1:"7:30-9-30",
            room1:"A20",
            time1Value:"Mathematics fro computer science",
            time2:"9:30-11:30",
            room2:"Lib8",
            time2Value:"Entrepreneurship",
            time3:"11:30-1:30",
            room3:"A33",
            time3Value:"Basic Electronics",
            time4:"1:30-3:30",
            room4:"Lib3",
            time4Value:"Communication Skills",
            time5:"3:30-5:30",
            room5:"B12",
            time5Value:"Numeracy",
        },
        {
            day:"Thursday",
            time1:"7:30-9-30",
            room1:"B26",
            time1Value:"Mathematics fro computer science",
            time2:"9:30-11:30",
            room2:"A40",
            time2Value:"Entrepreneurship",
            time3:"11:30-1:30",
            room3:"Lib19",
            time3Value:"Basic Electronics",
            time4:"1:30-3:30",
            room4:"B02",
            time4Value:"Communication Skills",
            time5:"3:30-5:30",
            room5:"A11",
            time5Value:"Numeracy",
        },
        {
            day:"Friday",
            time1:"7:30-9-30",
            room1:"A20",
            time1Value:"Mathematics fro computer science",
            time2:"9:30-11:30",
            room2:"Lib05",
            time2Value:"Entrepreneurship",
            time3:"11:30-1:30",
            room3:"B13",
            time3Value:"Basic Electronics",
            time4:"1:30-3:30",
            room4:"A26",
            time4Value:"Communication Skills",
            time5:"3:30-5:30",
            room5:"B10",
            time5Value:"Numeracy",
        },

    ]

    const Item=({day,
        time1,time1Value,
        time2,time2Value,
        time3,time3Value,
        time4,time4Value,
        time5,time5Value,
        room1,room2,room3,room4,room5
    })=>{
        return(
            <View style={styles.dayBlock}>
                <View style={styles.blockD}>
                    <View style={styles.dayTitelView}>
                        <Text style={styles.txtDay}>{day}</Text>
                        <Text style={styles.txtDay}>Unit/Subject</Text>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{time1}</Text>
                            <Text>{room1}</Text>
                        </View>
                        <View style={styles.block1}>
                            <Text>{time1Value}</Text>
                        </View>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{time2}</Text>
                            <Text>{room2}</Text>
                        </View>
                        <View style={styles.block1}>
                            <Text>{time2Value}</Text>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{time3}</Text>
                            <Text>{room3}</Text>
                        </View>
                        <View style={styles.block1}>
                            <Text>{time3Value}</Text>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{time4}</Text>
                            <Text>{room4}</Text>
                        </View>
                        <View style={styles.block1}>
                            <Text>{time4Value}</Text>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>{time5}</Text>
                            <Text>{room5}</Text>
                        </View>
                        <View style={styles.block1}>
                            <Text>{time5Value}</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item})=> <Item
                 day={item.day}
                 time1={item.time1}
                 time1Value={item.time1Value}
                 time2={item.time2}
                 time2Value={item.time2Value}
                 time3={item.time3}
                 time3Value={item.time3Value}
                 time4={item.time4}
                 time4Value={item.time4Value}
                 time5={item.time5}
                 time5Value={item.time5Value}
                 room1={item.room1}
                 room2={item.room2}
                 room3={item.room3}
                 room4={item.room4}
                 room5={item.room5}
                 />}
                keyExtractor={item=>item.day}
                />
        </View>
    )
}

const styles=StyleSheet.create({
    
    blockD:{
        padding:20,
        backgroundColor:'white'
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
        marginBottom:20,
    }
})