import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native";

function Card(props){
    const handlePress = () => {
        if(props.url) {
            Linking.openURL(props.url);
        }
    };

    return(
        <Pressable onPress={handlePress}>
            <View style={styles.box}>
                <Image 
                    style={styles.image}
                    source={{uri: props.imageUrl}} 
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.price}>{props.price}</Text>
                    {props.description && 
                        <Text style={styles.description}>{props.description}</Text>
                    }
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: "25%",
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
    },
    description: {
        fontSize: 12,
        color: "#666",
        marginTop: 5
    }
});

export default Card;