import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Alert } from 'react-native';


import {categories} from  "./TaskData"


export default function AddTask({navigation}){
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
    console.warn("A date has been picked: ")
    hideDatePicker();
  }

const handleSubmit = () => {
  if (title && description && category && selectedDate) {
    const task = {
        title,
          description,
          category,
          date: selectedDate.toString()
      };
      console.log('Task:', task);

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
    <SafeAreaView>
      <View>
        <Text>Create Task</Text>
        <TextInput 
          style={styles.title}
          placeholder="Enter Task Title"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <TextInput 
          style={styles.description}
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
          <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={() => setDatePickerVisibility(false)} // Fix the function name here
            />
        </View>
        {selectedDate !== null && (
          <Text>{selectedDate.toString()}</Text>
        )}
        <TouchableOpacity onPress={handleSubmit}>   
            <Text>Add Task</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fef',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  