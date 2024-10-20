import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Textfield() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#aaa" padding={20} alignItems= 'right' />
      <TextInput 
        placeholder="Search doctors and condition" 
        style={styles.input} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#f5f5f5',
    // marginBottom: 20,
    // paddingTop: 55,
    // margin:20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 16,

  },
  input: {
    marginLeft: 10,  
    borderBottomWidth: 1,
    borderColor: 'gray',
    flex: 1, 
  }
});
