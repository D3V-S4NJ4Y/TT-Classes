import React from 'react'
import { View, Text, Button} from 'react-native-web'
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Profile from "./src/screens/Profile";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createBottomTabNavigator();
function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default App;