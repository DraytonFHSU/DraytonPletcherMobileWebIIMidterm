import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TaskDetails = ({ route }) => {
  const { task } = route.params; // Access the task data passed as a parameter

  return (
    <View style={styles.container}>
      <Image source={task.image} style={styles.image} />
      <Text style={styles.id}>Task ID: {task.id}</Text>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

export default TaskDetails;
