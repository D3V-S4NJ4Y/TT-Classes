import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./card";

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            
            <Card 
                name="Apple" 
                price="₹140" 
                description="Fresh red apples"
                url="https://www.example.com/apple"
                imageUrl="https://th.bing.com/th/id/OIP.0IchPHnyqTYFQSltP4C2RQHaE8?w=266&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            />
            <Card 
                name="Banana" 
                price="₹60" 
                description="Organic bananas"
                url="https://www.example.com/banana"
                imageUrl="https://th.bing.com/th/id/OIP.SQhBFfPbLlbclV-ZD_bzcQHaFK?w=262&h=183&c=7&r=0&o=7&pid=1.7&rm=3"
            />
            <Card 
                name="Orange" 
                price="₹80" 
                description="Juicy oranges"
                url="https://www.example.com/orange"
                imageUrl="https://th.bing.com/th/id/OIP.WI8o_x9BfjLF_1_bN2S_1gHaFj?w=250&h=188&c=7&r=0&o=7&pid=1.7&rm=3"
            />
            <Card 
                name="Grapes" 
                price="₹160" 
                description="Sweet purple grapes"
                url="https://www.example.com/grapes"
                imageUrl="https://th.bing.com/th/id/OIP.kAZRHXusfaaVeBxDTJC8wQHaLI?w=140&h=211&c=7&r=0&o=7&pid=1.7&rm=3"
            />
            <Card 
                name="Mango" 
                price="₹120" 
                description="Premium mangoes"
                url="https://www.example.com/mango"
                imageUrl="https://th.bing.com/th/id/OIP.mup_rcvSBlZvFKIG3mxdXAHaE7?w=272&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333"
    },
    scrollView: {
        padding: 20
    }
});