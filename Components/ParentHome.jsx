import { Text,View,StyleSheet,Button } from "react-native"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function ParentHome() {
    const navigation=useNavigation()
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 100) => `#8CC7F2`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const data = {
        labels: ["TERM 1", "TERM 2", "TERM 3"],
        datasets: [
          {
            data: [20, 45, 50],
            color: (opacity = 100) => `#8CC7F2`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["END TERM PERFORMANCE"] // optional
      };

    return(
        <View style={styles.container}>
            <View style={styles.cardBox}>
                <Text style={{fontWeight:'bold',margin:1,fontSize:25}}>MOSES KARIUKI</Text>
                <Text style={{fontWeight:'bold',margin:1,fontSize:15}}>CSC6/0342/24</Text>
                <Text style={{fontSize:20,marginTop:20}}>Fee balnce</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>Ksh.4500</Text>
            </View>
            <View style={{padding:10,alignItems:'center',marginTop:10}}>
                <Text style={{fontSize:20,marginBottom:20}}>Performance analysis</Text>

                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />

                <View style={{marginTop:30}}>
                    <View>
                        <Button title="View full Performance"  
                        onPress={()=>navigation.navigate('result')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
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
        marginRight:'auto',
        marginTop:10
    },
})