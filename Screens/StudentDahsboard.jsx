import { View,Text, StyleSheet,Button, TextInput, ScrollView } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProgressPage from "../Components/ProgressPage";
import Messages from "../Components/Messages";
import StudentHome from '../Components/StudentHome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

export default function StudentDashboard() {
   
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        
        >
            <Tab.Screen name="Home" component={StudentHome}
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Progress" component={ProgressPage} 
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="animation" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Messages" component={Messages} 
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="android-messages" color={color} size={26} />
                )
            }}/>
      </Tab.Navigator>
    )
}

