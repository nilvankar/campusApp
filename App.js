import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Sidebar from './components/pages/Sidebar';
import AboutInstitute from './components/pages/AboutInstitute';
import Achievments from './components/pages/Achievments';
import Profile from './components/pages/Profile';
import Salary from './components/pages/Salary';
import Transportation from './components/pages/Transportation';
import Notification from './components/pages/Notification';
import LeaveManagement from './components/pages/LeaveManagement';
import Gallery from './components/pages/Gallery';
import Library from './components/pages/Library';
import ExamTimeTable from './components/pages/ExamTimeTable';
import Email from './components/pages/Email';
import Complaints from './components/pages/Complaints';
import ClassTimeTable from './components/pages/ClassTimeTable';
import Chat from './components/pages/Chat';
import Calendar from './components/pages/Calendar';
import Behaviour from './components/pages/Behaviour';
import AttendanceHistory from './components/pages/AttendanceHistory';
import Attendance from './components/pages/Attendance';
import Assignment from './components/pages/Assignment';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name='Home' options={{ title: "Welcome" }}></Stack.Screen>
        <Stack.Screen component={Signup} name='Signup' options={{ title: "Signup" }} ></Stack.Screen>
        <Stack.Screen component={Login} name='LOGIN' options={{ title: "Login" }}></Stack.Screen>
        <Stack.Screen component={Sidebar} name='Sidebar' options={{ title: "" }}></Stack.Screen>
        <Stack.Screen component={Profile} name='profile' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={Salary} name='salary' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={Transportation} name='transporation' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={Notification} name='notification' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={LeaveManagement} name='leave' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={Gallery} name='gallery' options={{ title: "" }} ></Stack.Screen>
        <Stack.Screen component={Library} name='library' options={{ title: "" }}></Stack.Screen>
        <Stack.Screen component={ExamTimeTable} name='examtimetable'></Stack.Screen>
        <Stack.Screen component={Email} name='email'></Stack.Screen>
        <Stack.Screen component={Complaints} name='complaints'></Stack.Screen>
        <Stack.Screen component={ClassTimeTable} name='classtimetable'></Stack.Screen>
        <Stack.Screen component={Chat} name='chat'></Stack.Screen>
        <Stack.Screen component={Calendar} name='calender'></Stack.Screen>
        <Stack.Screen component={Behaviour} name='behaviour'></Stack.Screen>
        <Stack.Screen component={AttendanceHistory} name='attednancehistory'></Stack.Screen>
        <Stack.Screen component={Attendance} name='attendance'></Stack.Screen>
        <Stack.Screen component={Assignment} name='assignment'></Stack.Screen>
        <Stack.Screen component={Achievments} name='achievements'></Stack.Screen>
        <Stack.Screen component={AboutInstitute} name='aboutinstitute'></Stack.Screen>
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
