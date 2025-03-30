import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.header}>Drayton's Super cool website</Text>
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      backgroundColor: '#fef',
      color: "#b0b",
    },
  });
  