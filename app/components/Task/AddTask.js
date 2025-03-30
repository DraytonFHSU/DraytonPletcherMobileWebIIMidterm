import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Alert } from 'react-native';

import taskData, { categories } from  "./TaskData"; // Import taskData

import { useNavigation } from '@react-navigation/native'; // Add this to use navigation hook


export default function AddTask(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //dropdown
  const[open, setOpen] = useState(false);
  const[category, setCategory] = useState(null);

  const categoryItems = categories.map((item) => ({
    value: item.value,
    label: item.label,
  }))

  //datetime
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    setSelectedDate(date);
    console.warn("A date has been picked: ", date)
    hideDatePicker();
  }

  const [tasks, setTasks] = useState(taskData); // Set initial tasks from taskData

const navigation = useNavigation();

const handleSubmit = () => {
  if (title && description && category && selectedDate) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      category,
      date: selectedDate.toString(),
      image: require("../../../assets/Mad_Duck.jpg"),
    };
    const updatedTaskList = [...tasks, newTask];
      console.log('Task:', newTask);

      // Navigate back to TaskList and pass the updated task list as a parameter
      navigation.navigate('TaskList', { updatedTaskList });

      // Clear the form fields
      setTitle('');
      setDescription('');
      setCategory(null);
      setSelectedDate(null);
    } else {
      Alert.alert("Please fill in all fields.");
  }
};

return (
  <>
    <SafeAreaView style={styles.screen}>
      <View style={styles.viewContainer}>
        <Text>Create Task</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Task Title"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter Task Description"
          onChangeText={(description) => setDescription(description)}
          value={description}
        />
        <DropDownPicker
          open={open}
          value={category}
          items={categoryItems}
          setOpen={setOpen}
          setValue={setCategory}
          placeholder="Task Category"
          placeholderStyle={styles.dropdownText}
          containerStyle={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />

        <View>
          <Button
            title="Select Date & Time"
            onPress={() => setDatePickerVisibility(true)}
          />
          <DateTimePicker style={styles.date}
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={(date) => handleConfirm(date)}
              onCancel={() => setDatePickerVisibility(false)}
            />
        </View>
        {selectedDate !== null && (
          <Text>{selectedDate.toString()}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>   
            <Text>Add Task</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#ffe4b5",
      alignItems: "center",
      justifyContent: 'center',
    },
    viewContainer: {
      flex: 1,
      padding: 50,
      backgroundColor: "#ffe4b5",
    },
    title:{
      color: "black",
      fontSize: 50,
      textAlign: "center"
    },
    description:{
      color: "black",
      fontSize: 50,
      textAlign: "center"
    },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 20,
      borderColor: "#ffe4b5",
      borderBottomColor: "black"
    },
    dropdownText: {
      color: "black",
      fontWeight: "bold",
    },
    dropdown: {height: 100, borderRadius: 30, paddingTop: 30},
    dropdownContainer: {
      backgroundColor: "#dfdfdf",
      borderRadius: 30,
    },
    date: {
      paddingTop: 30,
    },
  });
  