import { Text,View,StyleSheet } from "react-native"
import MapView from "react-native-maps"
import { Marker } from "react-native-maps";

export default function Map() {
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
    return(
        <View style={styles}>
            <View>
            
            </View>
            <View>
                <MapView style={styles.map} 
                initialRegion={tokyoRegion}
                >
                <Marker coordinate={tokyoRegion} />
                </MapView>
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