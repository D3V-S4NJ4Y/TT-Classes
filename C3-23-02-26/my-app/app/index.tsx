import { View, Text, StyleSheet,Image, Button } from "react-native";
import { useState, useEffect } from "react";
export default function Index(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("incremented");
    },[count])
    return(  
        <View style={styles.container}>
            <Text style={styles.text}>Result: {count}</Text>
            <Button title="increment" onPress={()=>setCount(count+1)}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        marginBottom: 20
    }
});