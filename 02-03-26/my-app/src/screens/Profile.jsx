import React from 'react'
import { View, Text, Button} from 'react-native-web'

function Profile({ navigation }) {
    return (
        <View>
            Profile
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> 
            <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    )
}
export default Profile;
