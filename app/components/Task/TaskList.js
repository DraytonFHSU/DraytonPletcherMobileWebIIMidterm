import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import taskData from './TaskData';
import Card from '../shared/Card';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Task from './Task';
 
const TaskList = ({ navigation }) => {
  const [completedTasks, setCompletedTasks] = useState({});

const toggleTaskCompletion = (taskId) => {
  setCompletedTasks((prevState) => ({...prevState, [taskId]: !prevState[taskId], }));
};

const [taskList, setTaskList] = useState(taskData);
 
const deleteTask = (id) => {
  const newList = taskList.filter(task => task.id !== id);
  setTaskList(newList);
};

return (
  <SafeAreaView style={styles.screen}>
    <FlatList
      data={taskList}
      keyExtractor={(task) => task.id.toString()}  
      renderItem={({ item }) => {  {/* Destructure the item from the renderItem prop */}
        return (
          <Task
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('TaskDetails', { task: item })}
            renderRightActions={() => (
              <View>
                <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
                  <Text>Delete</Text>
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        );
      }}
    />
    
  </SafeAreaView>
);

// return (
//   <ScrollView style={styles.container}>
//     {taskData.map((task) => (
//       <Card key={task.id}>
//         <Image source={task.image} style={styles.image} />
//         <Text style={styles.title}>{task.title}</Text>
//         <Text style={styles.description}>{task.description}</Text>
//         <Button
//           title={completedTasks[task.id] ? 'Mark Incomplete' : 'Mark Completed'}
//           onPress={() => toggleTaskCompletion(task.id)}
//           color={completedTasks[task.id] ? 'green' : 'blue'}
//         />
//         <Button title="View Details" onPress={() => navigation.navigate('TaskDetails', {task})}>View Details</Button>
//       </Card>
//     ))}
//   </ScrollView>
// );

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
});
 
export default TaskList;


