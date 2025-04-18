import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import taskData from './TaskData';
import Card from '../shared/Card';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import Task from './Task';
 
const TaskList = () => {
  //legacy code
  const [completedTasks, setCompletedTasks] = useState({});
  const toggleTaskCompletion = (taskId) => {
  setCompletedTasks((prevState) => ({...prevState, [taskId]: !prevState[taskId], }));
};

 //delete task
  const deleteTask = (id) => {
  const newList = taskList.filter(task => task.id !== id);
  setTaskList(newList);
};

//for add task
const route = useRoute(); // Access the route object
const [taskList, setTaskList] = useState(taskData); // Default to the initial taskData

useEffect(() => {
  if (route.params?.updatedTaskList) {
    setTaskList(route.params.updatedTaskList); // Set task list to updated tasks
  }
}, [route.params?.updatedTaskList]); // Dependency to trigger when params change


return (
  <SafeAreaView style={styles.screen}>
    <FlatList
      data={taskList}
      keyExtractor={(task) => task.id.toString()}  
      renderItem={({ item }) => { 
        return (
          <Task
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
            onPress={() => navigation.navigate('TaskDetails', { task: item })}
            renderRightActions={() => (
              <View>
                <TouchableWithoutFeedback style={styles.deleteMenu} onPress={() => deleteTask(item.id)}>
                  <Text style={styles.deleteMenu}>Delete</Text>
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        );
      }}
    />
    
  </SafeAreaView>
);

};
 
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  container: {
    padding: 20,
    width: '75%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  deleteMenu: {
    fontSize: 14,
    backgroundColor: '#red',
  },
});
 
export default TaskList;


