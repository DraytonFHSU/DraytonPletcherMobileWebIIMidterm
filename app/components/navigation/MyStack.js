import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-web';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import MyButton from '../MyButton/MyButton';
import TaskList from '../Task/TaskList';
import TaskData from '../Task/TaskData'
import TaskDetails from '../Task/TaskDetails';
import Testing from '../shared/Testing';
import AddTask from '../Task/AddTask';

import { useState } from 'react';

const Stack = createStackNavigator();
//const [taskList, setTaskList] = useState(TaskData);

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Header></Header>
        <Profile name = {"Drayton Pletcher"} />
        <MyButton></MyButton>
        <Button onPress={() => navigation.navigate('AddTask')}> Add Task </Button>
        <TaskList navigation={navigation}/>
      </View>
          {/* <Testing/> */}
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function AddTaskScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

