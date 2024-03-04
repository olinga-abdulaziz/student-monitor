import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLogin from './Screens/AuthScreens/MainLogin'
import StudentLogin from './Screens/AuthScreens/StudentLogin';
import TeacherLogin from './Screens/AuthScreens/TeacherLogin'
import ParentLogin from './Screens/AuthScreens/ParentLogin'
import StudentDashboard from './Screens/StudentDahsboard';


export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="mainLogin" component={MainLogin} />
        <Stack.Screen name="studentLogin" component={StudentLogin} />
        <Stack.Screen name="teacherLogin" component={TeacherLogin} />
        <Stack.Screen name="parentLogin" component={ParentLogin} />
        <Stack.Screen name="studentDashboard" component={StudentDashboard} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

