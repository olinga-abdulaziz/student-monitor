import { View,Text, StyleSheet,Button, TextInput, ScrollView, Pressable } from "react-native"


export default function Performance() {
    return(
        <View style={styles.bobodyB}>
            <ScrollView>
            <View style={styles.dayBlock}>
                <View style={styles.blockD}>
                    <View style={styles.dayTitelView}>
                        <Text style={styles.txtDay}>TERM 1</Text>
                        <Text style={styles.txtDay}>...</Text>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 1</Text>
                            <Text>Distingtion</Text>
                        </View>
                        <View style={styles.block1}>
                            <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 2</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 3</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>   
                </View>
                
            </View>

            <View style={styles.dayBlock}>
                <View style={styles.blockD}>
                    <View style={styles.dayTitelView}>
                        <Text style={styles.txtDay}>TERM 2</Text>
                        <Text style={styles.txtDay}>...</Text>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 1</Text>
                            <Text>Distingtion</Text>
                        </View>
                        <View style={styles.block1}>
                            <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 2</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 3</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>   
                </View>
                
            </View>

            <View style={styles.dayBlock}>
                <View style={styles.blockD}>
                    <View style={styles.dayTitelView}>
                        <Text style={styles.txtDay}>TERM 3</Text>
                        <Text style={styles.txtDay}>...</Text>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 1</Text>
                            <Text>Distingtion</Text>
                        </View>
                        <View style={styles.block1}>
                            <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 2</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>

                    
                    <View style={styles.FlexBlock}>
                        <View style={styles.block1}>
                            <Text>CAT 3</Text>
                            <Text>Pass</Text>
                        </View>
                        <View style={styles.block1}>
                        <Pressable>
                                <Text>View Results</Text>
                            </Pressable>
                        </View>
                    </View>   
                </View>
                
            </View>

            </ScrollView>
            
        </View>
    )
}

const styles=StyleSheet.create({

    blockD:{
        padding:20,
        backgroundColor:'#D9D9D9',
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
        paddingBottom:220
    }
})