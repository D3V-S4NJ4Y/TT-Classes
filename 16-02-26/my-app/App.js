import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image 
          source={require('./assets/sanjay.png')}
          style={styles.profile}
        />

        <Text style={styles.name}>Sanjay Kumar Chaurasiya</Text>
        <text>Software Engineer</text><br></br>
        <View style={styles.row}>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/D3V-S4NJ4Y')}>
            <Image
              source={{ uri: "https://pngimg.com/uploads/github/github_PNG40.png" }}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.linkedin.com/in/sanjay127/')}>
            <Image
              source={{ uri: "https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" }}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/officialsanjay101/')}>
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.shMLwGIsbDrfGhWzmHp0mQHaF7?rs=1&pid=ImgDetMain&o=7&rm=3" }}
              style={styles.icon}
            />
          </TouchableOpacity>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});