import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentLogin from './Screens/AuthScreens/StudentLogin';
import TeacherLogin from './Screens/AuthScreens/TeacherLogin'
import ParentLogin from './Screens/AuthScreens/ParentLogin'
import StudentDashboard from './Screens/StudentDahsboard';
import Result from './Components/Result';
import TeacherDashboard from './Screens/TeacherDashboard';
import ClassRegister from './Components/ClassRegister'
import ParentDashboard from './Screens/ParentDashboard';
import ParenetStudents from './Screens/ParentStudents';
import MainScreen from './Screens/MainScreen'
import SplashScreen from './Screens/AuthScreens/SplashScreen';
import StudentSignup from './Screens/AuthScreens/StudentSignup'
import TeacherSignup from './Screens/AuthScreens/TeavherSignup'
import ParentSignup from './Screens/AuthScreens/ParentSignup'

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        <Stack.Screen name="mainScreen" component={MainScreen} />
        <Stack.Screen name="studentLogin" component={StudentLogin} />
        <Stack.Screen name="teacherLogin" component={TeacherLogin} />
        <Stack.Screen name="parentLogin" component={ParentLogin} />
        <Stack.Screen name="studentDashboard" component={StudentDashboard} />
        <Stack.Screen name="teacherDashboard" component={TeacherDashboard} />
        <Stack.Screen name="result" component={Result} />
        <Stack.Screen name="classsRegister" component={ClassRegister} />
        <Stack.Screen  name="parenttudents" component={ParenetStudents} />
        <Stack.Screen  name="parentDashboard" component={ParentDashboard} />
        <Stack.Screen  name="studentSignup" component={StudentSignup} />
        <Stack.Screen  name="teacherSignup" component={TeacherSignup} />
        <Stack.Screen  name="parentSignup" component={ParentSignup} />
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

