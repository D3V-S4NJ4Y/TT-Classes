import { View, Text, StyleSheet, Button, TextInput, Switch } from "react-native";
import { useState, useEffect } from "react";
export default function Index(){
    const [password, setPassword] = useState("");
    const [length, setLength] = useState('8');
    const [useNumber, setUseNumber] = useState(false);
    const [useChar, setUseChar] = useState(false);
    const [UseUppercase, setUseUppercase] = useState(false);
    const [useSymbol, setUseSymbol] = useState(false);

    const generate = () => {
        let passLength =Number(length);
        let tempPassword = "";
        let characters = "";
        if (useNumber) characters += "0123456789";
        if (useChar) characters += "abcdefghijklmnopqrstuvwxyz";
        if (UseUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useSymbol) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        for (let i = 0; i < passLength; i++) {
            tempPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(tempPassword);
    };

return(  
        <View style={styles.container}>
            <Text style={styles.text}>Password: {password}</Text>
            
            <View style={styles.row}>
                <Text>Length:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setLength(text)}
                    value={length}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.row}>
                <Text>Numbers</Text>
                <Switch value={useNumber} onValueChange={setUseNumber} />
            </View>

            <View style={styles.row}>
                <Text>Lowercase</Text>
                <Switch value={useChar} onValueChange={setUseChar} />
            </View>

            <View style={styles.row}>
                <Text>Uppercase</Text>
                <Switch value={UseUppercase} onValueChange={setUseUppercase} />
            </View>

            <View style={styles.row}>
                <Text>Symbols</Text>
                <Switch value={useSymbol} onValueChange={setUseSymbol} />
            </View>

            <Button title="Generate Password" onPress={generate} />
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
        marginVertical: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 60,
        textAlign: 'center'
    }
});