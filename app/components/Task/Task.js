import React from 'react'
import {Text, StyleSheet, View, ScrollView, Image, TouchableOpacity} from "react-native";
import TaskProperties from './TaskProperties';
import { Swipeable } from 'react-native-gesture-handler';

export default function Task({image, title, description, category, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableOpacity onPress={onPress}>
      <>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      {/* <TaskProperties /> */}
      {/* additional description, etc. change */}
      </>
    </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b8860b',
    flexDirection: "column",
    padding: 25,
    paddingTop: 20,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: '#FFF',
  },
  description: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    color: '#FFF',
  },
  category: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    color: '#FFF',
  },
})