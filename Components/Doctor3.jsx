import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <>
      {/* Parent container to align both doctors in a row */}
      <View style={styles.doctorsContainer}>

        {/* 1st Doctor */}
        <View style={styles.container3}>
          <Icon name="user-md" size={50} color="black" />
          <Text style={styles.name}>Dr. Angela Rayez</Text>
          <Text style={styles.profession}>Therapist</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="yellow" />
            <Text style={styles.ratingText}>4.3</Text>
          </View>      
        </View>
       
        {/* 2nd Doctor */}
        <View style={styles.container3}>
          <Icon name="user-md" size={50} color="black" />
          <Text style={styles.name}>Dr. Chris Bronte</Text>
          <Text style={styles.profession}>Teeth Doctor</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="yellow" />
            <Text style={styles.ratingText}>4.0</Text>
          </View>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  doctorsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    margin: 10,
    alignItems: 'center', 
  },

  container3: {
    flexDirection: 'column',  
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    width: 150,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  profession: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple', 
    padding: 5, 
    borderRadius: 20, 
    justifyContent: 'center',
    marginTop: 10,
    width: 70, 
  },

  ratingText: {
    marginLeft: 5,
    color: '#fff', 
    fontWeight: 'bold',
  },
});
