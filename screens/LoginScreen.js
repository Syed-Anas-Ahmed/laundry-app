import {
    StyleSheet,
    Text,
    TextInput,
    SafeAreaView,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Sign in</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
            <View style={styles.textContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.icon} name="mail-outline" size={30} color="black" />
                    <TextInput value={email} onChange={(text) => { setEmail(text) }} style={styles.input} placeholder="Email"></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.icon} name="key-outline" size={30} color="black" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigate.navigate("Register")}>
                    <Text style={styles.registerText}>Don't Have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        padding: 40,
        alignItems: "center",
        width: "94%",
        justifyContent: "center",
    },
    inputContainer: {
        paddingRight:20,
        flexDirection: "row"
    },
    icon: {
        paddingTop: 5,
        verticalAlign: "middle",
        paddingRight: 10
    },
    input: {
        padding: 5,
        marginVertical: 5,
        borderColor: "black",
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 3,
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        color: "#492f5b",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "black",
    },
    btn: {
        marginTop: 30,
        paddingHorizontal: 65,
        paddingVertical: 10,
        backgroundColor: "#015aa9",
        borderRadius: 10,
    },
    btnText: {
        fontSize: 18,
        color: "#ffff",
    },
    registerText: {
        paddingTop: 15,
        fontSize: 16,
    }
});