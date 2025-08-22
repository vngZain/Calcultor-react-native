import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './components/Display';
import ButtonRow from './components/ButtonRow';


export default function App() {
  const [display, setDisplay] = useState('0');

  // Handler for button presses
  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay('0'); // Clear display on "C"
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString()); // Evaluate expression
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === '+/-') {
      setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    } else if (value === '%') {
      setDisplay((prev) => (parseFloat(prev) / 100).toString());
    } else {
      setDisplay((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <View style={styles.container}>
      <Display value={display} />

      {/* Button rows */}
      <ButtonRow buttons={['C', '+/-', '%', '/']} onPress={handlePress} />
      <ButtonRow buttons={['7', '8', '9', '*']} onPress={handlePress} />
      <ButtonRow buttons={['4', '5', '6', '-']} onPress={handlePress} />
      <ButtonRow buttons={['1', '2', '3', '+']} onPress={handlePress} />
      <ButtonRow buttons={['0', '.', '=']} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
