import { Text,View,StyleSheet } from "react-native"
import TeacherTimeTable from '../Components/TeacherTimeTable'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParentHome from '../Components/ParentHome'
import Map from '../Components/Map'
import Messages from '../Components/Messages'

const Tab = createBottomTabNavigator();

export default function ParentDashboard() {
   
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        
        >
            <Tab.Screen name="Home" component={ParentHome}
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Map" component={Map} 
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="map" color={color} size={26} />
                ),
                title:"Location"
            }}
            
            />
            <Tab.Screen name="Messages" component={Messages} 
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="android-messages" color={color} size={26} />
                )
            }}/>
      </Tab.Navigator>
    )
}

