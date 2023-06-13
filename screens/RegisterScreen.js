import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation()

    const dispDetails = () =>{
        console.log(email,password)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Registration</Text>
            <Text style={styles.subtitle}>Register your account</Text>
            <KeyboardAvoidingView style={styles.textContainer}>
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
                <TouchableOpacity onPress={dispDetails} style={styles.btn}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigate.navigate("Login")}>
                    <Text style={styles.registerText}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
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