import { View,Text, StyleSheet,Button, TextInput, ScrollView } from "react-native"
import Performance from "./Performance";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";


export default function ProgressPage() {
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

      const chartdata = {
        labels: ["CAT 1", "CAT 2", "CAT 3"],
        datasets: [
          {
            data: [20, 45, 28],
            color: (opacity = 100) => `#8CC7F2`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["END TERM PERFORMANCE"] // optional
      };

    return(
        <View style={styles.container}>
            <View>
            <LineChart
                data={chartdata}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            /> 
            </View>
           <View>
                <Performance />
           </View>
            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1
    },
    cahrtView:{
        paddingBottom:50
    },
    
    progressView:{
        padding:30,
        alignItems:'center'
    },
    perTXT:{
        fontWeight:'bold',
        color:'#8CC7F2'
    }
})