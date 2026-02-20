import React from "react";
import { View, Text, Image, Pressable, Linking, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Card from "./card";

export default function App(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <ScrollView style={styles.scrollView}>
                <Card name="Apple" price="$1.00" />
                <Card name="Banana" price="$0.50" />
                <Card name="Orange" price="$0.75" />
                <Card name="Grapes" price="$2.00" />
                <Card name="Mango" price="$1.50" />
            </ScrollView>
        </SafeAreaView>
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