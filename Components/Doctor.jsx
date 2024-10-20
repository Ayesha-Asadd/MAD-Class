import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.doctorsContainer}>
      {/* 1st Doctor */}
      <View style={styles.container}>
        <Icon name='user-md' size={50} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Dr. John Smith</Text>
          <Text style={styles.profession}>Dermatologist</Text>
          <View style={styles.ratingContainer}>
            <Icon name='star' size={20} color="yellow" />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
      </View>

      {/* 2nd Doctor */}
      <View style={styles.container}>
        <Icon name="user-md" size={50} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Dr. Anna Dinn</Text>
          <Text style={styles.profession}>Mind Doctor</Text>
          <View style={styles.ratingContainer}>
            <Icon name='star' size={20} color="yellow" alignItems="center" />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  doctorsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    padding: 20,
    margin: 10,
    alignItems: 'center', 
  },


  container: {
    flexDirection: 'column',  
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    width: 150,
  },

  textContainer: {
    marginLeft: 10,
    alignItems: 'center',
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
    alignItems: 'center',
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

  rating: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});
