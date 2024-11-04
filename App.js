import { View, StyleSheet } from 'react-native';
import Operator from './Components/operator'; 


const App = () => {
  return (
    <View style={styles.container}>
      <Operator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,      
  },
});

export default App;