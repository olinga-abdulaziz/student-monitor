import { Text,View,StyleSheet } from "react-native"
import TeacherTimeTable from '../Components/TeacherTimeTable'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TeacherHome from '../Components/TeacherHome'
import ClassList from '../Components/ClassList'
import Messages from "../Components/Messages";

const Tab = createBottomTabNavigator();

export default function TeacherDashboard() {
   
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        
        >
            <Tab.Screen name="Home" component={TeacherHome}
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Classes" component={ClassList} 
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

