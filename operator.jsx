import  { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Operator = () => {
  const [input, setInput] = useState('0');

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '=') {
      setInput(eval(input).toString());
    } else {
      setInput(input === '0' ? value : input + value);
    }
  };

  const buttons = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((button) => (
            <TouchableOpacity
              key={button}
              style={[styles.button, button === '0' ? styles.zeroButton : null]}
              onPress={() => handlePress(button)}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    margin:0,
  },
  display: {
    color: '#FFF',
    fontSize: 40,
    textAlign: 'right',
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
  },
  zeroButton: {
    width: 110,
  },
});
export default Operator;