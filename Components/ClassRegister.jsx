import { useState } from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ClassRegister() {
    const data=[
        {
            name:"Abdulaziz said",
            adm:"csc6/3082/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/3047/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/564/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/4555/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/30442/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/04g42/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/78857/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/455565/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/304644542/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/04454242/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/7885647/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/04454llk242/24"
        },
        {
            name:"Abdulaziz said",
            adm:"csc6/78jhj85647/24"
        },
    ]

    const [showConfirm,setShowConfirm]=useState(false)
    const [showDecline,setShowDecline]=useState(false)

    const DeclineBox=()=>{
        return(
            <View style={styles.boxBackground}>
            <View style={styles.confirmBox}>
                <View style={{alignItems:'center'}}>
                    <Text>Confrim</Text>
                    <Text style={{textAlign:'center'}}>Are you sure you want to mark absent?</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="cancel" size={50} color={"red"} />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnMark}
                    onPress={()=>setShowDecline(false)}
                    >
                        <Text style={{color:'white'}}>MARK</Text>
                        <MaterialCommunityIcons name="cancel"  color={"red"} size={17} />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }

    
    const ConfirmBox=()=>{
        return(
               <View style={styles.confirmBox}>
                <View style={{alignItems:'center'}}>
                    <Text>Confrim</Text>
                    <Text style={{textAlign:'center'}}>Are you sure you want to mark present?</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="check-all" size={50} color={"green"} />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnMark}
                    onPress={()=>setShowConfirm(false)}
                    >
                        <Text style={{color:'white'}}>MARK</Text>
                        <MaterialCommunityIcons name="check-all" size={17} color={"white"} />
                    </TouchableOpacity>
                </View>
                </View>
        )
    }

    const Item=({name,adm})=>{
        return(
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:20,alignItems:'center'}}>
                <View>
                    <Text>{name}</Text>
                </View>
                <View>
                    <Text>{adm}</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TouchableOpacity
                        onPress={()=>setShowConfirm(true)}
                    ><MaterialCommunityIcons name="check-all" color={"green"} size={35} /></TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TouchableOpacity
                    onPress={()=>setShowDecline(true)}
                    ><MaterialCommunityIcons name="cancel"  color={"red"} size={35} /></TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={{fontWeight:'bold',fontSize:20}}>CSC6/3042/24</Text>
                <Text style={{fontWeight:'400',fontSize:16}}>MATHEMATICS FOR COMPUTER SCIENCE</Text>
            </View>
            <View style={{paddingBottom:45}}>
                <FlatList 
                    data={data}
                    renderItem={({item})=> <Item name={item.name} adm={item.adm} />}
                    keyExtractor={item =>item.adm}

                    />
            </View>
                { showConfirm ?
                <View style={styles.coverBox}>
                    <ConfirmBox />
                </View>
                : <View />}
                { showDecline ?
                <View style={styles.coverBox}>
                    <DeclineBox />
                </View>
                : <View />}  
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex:1
    },
    topBar:{
        padding:20,
        backgroundColor:'white',
        marginTop:45
    },

    btnMark:{
        backgroundColor:'green',
        color:'white',
        padding:10,
        width:100,
        alignItems:'center',
        borderRadius:10,
        marginTop:10
    },
    coverBox:{
        position:"absolute",
        backgroundColor:'#00000869',
        height:"100%",
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center'
    },
    confirmBox:{
        backgroundColor:'white',
        width:'56%',
        padding:20,
        borderRadius:20,
        alignItems:'center'
    }

})