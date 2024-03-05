import { Text, View,StyleSheet,SafeAreaView } from "react-native";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  import { Dimensions } from "react-native";

export default function Result() {
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
        labels: ["Maths", "Ent.", "C. Skills", "Prog.", "Num", "Os"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 100) => `#8CC7F2`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["CAT 1 PERFORMANCE"] // optional
      };

    return(
            <View style={styles.container}>
                <View>
                    <View style={styles.topBar}>
                        <Text style={styles.perfTXT}>TERM 1 CAT 1 Results</Text>
                    </View>
                    
                    <View style={styles.bodyView}>
                        <View>
                            <LineChart
                                data={data}
                                width={screenWidth}
                                height={220}
                                chartConfig={chartConfig}
                            />
                        </View>
                        <View style={styles.resView}>
                            <View style={{marginBottom:10}}><Text style={{fontWeight:'bold',fontSize:18}}>Results</Text></View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Programming</Text>
                                <Text style={styles.unitMarks}>80%</Text>
                            </View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Mathematics for computer science</Text>
                                <Text style={styles.unitMarks}>90%</Text>
                            </View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Operating system</Text>
                                <Text style={styles.unitMarks}>88%</Text>
                            </View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Entrepreneurship</Text>
                                <Text style={styles.unitMarks}>84%</Text>
                            </View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Numeracy</Text>
                                <Text style={styles.unitMarks}>67%</Text>
                            </View>
                            <View style={styles.unitresView}>
                                <Text style={styles.unitTxt}>Comm. skilss</Text>
                                <Text style={styles.unitMarks}>50%</Text>
                            </View>
                        </View>
                        <View>
                            
                        </View>
                    </View>
                </View>
            </View> 
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    topBar:{
        marginTop:50,
    },
    perfTXT:{
        fontWeight:"bold",
        fontSize:20
    },
    bodyView:{
        marginTop:30
    },
    resView:{
        padding:10
    },
    unitTxt:{
        fontSize:18
    },
    unitMarks:{
        fontSize:17,
        fontWeight:'bold'
    },
    unitresView:{
        marginBottom:10
    }

    
})