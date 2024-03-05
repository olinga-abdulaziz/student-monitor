import { Text,View,StyleSheet } from "react-native"
import MapView from "react-native-maps"


export default function Map() {
    return(
        <View style={styles}>
            <View>
            
            </View>
            <View>
                <MapView style={styles.map} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    map:{
        width:"100%",
        height:'100%'
    },

})