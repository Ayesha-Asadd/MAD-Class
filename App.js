import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Doctor from './Components/Doctor';  
import Search from './Components/Search';  
import Doctor3 from './Components/Doctor3';


export default function App() {
  return (
 <>
 <Search>
 </Search>
 <Doctor> </Doctor>
 <Doctor3></Doctor3>
 
 </>
  );
}

const styles= StyleSheet.create({
  container:{
    paddingVertical: 150,
    paddingHorizontal: 15,
    alignItems: 'center',

  }
})
