import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props){
    return(
        <View style={styles.box}>
            <Image 
                style={styles.image}
                source={{uri: "https://cdn-icons-png.flaticon.com/512/415/415733.png"}} 
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: "100%",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 80,
        width: 80,
        marginRight: 15
    },
    textContainer: {
        flex: 1,
        justifyContent: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5
    },
    price: {
        fontSize: 16,
        color: "green",
        fontWeight: "600"
    }
});

export default Card;