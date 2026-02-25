import { View, Text, StyleSheet,Image, Button, Switch } from "react-native";
import { useState, useEffect } from "react";
export default function Index(){
    const [useDark, setUseDark] = useState(false);

    return(  
        <View>
            <Text style={styles.textLight}>Dark Mode & Light Mode</Text>
            <Switch value={useDark} onValueChange={setUseDark}></Switch>


            <View style={useDark ? styles.BoxDark : styles.BoxLight}>
                <Text style={useDark ? styles.TextDark : styles.textLight}>Hello World</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BoxLight: {
        backgroundColor: "gray",
    },
    textLight: {
        color: "black",
    },
    BoxDark: {
        backgroundColor: "black",
    },
    TextDark: {
        color: "white"
    }
});