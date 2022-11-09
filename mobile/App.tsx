import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Statusbar on top */}
      <StatusBar style="auto"/>
      
      {/* Simple title */}
      <Text style={styles.textTitle}>Welcome to a betterDay</Text>

      {/* Button clickable */}
      <Button title={"Here here 1"} />            
      <Button title={"Here here 2"} />            
      <Button title={"Here here 3"} />            
    </View>
  );
}

// Button interface
interface ButtonProps {
  title: string;
}

// Button example with a propertie
function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}    
      </Text>
    </TouchableOpacity>
  )
}

// Simple styles to start my project
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: '#000',
    fontSize: 22,
  },
});
