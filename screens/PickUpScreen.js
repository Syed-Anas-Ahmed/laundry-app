import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const PickUpScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.SafeAreaView}>
        <Text style={styles.heading}>Enter Your Address</Text>
        <View style={styles.inputCont}>
            <TextInput style={styles.inputBox}></TextInput>
        </View>
    </View>

    
    <View style={styles.scrollCont}>
    <ScrollView horizontal>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>
        <View style={styles.btnCont}><Pressable style={styles.btn}><Text>Hello</Text></Pressable></View>

    </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default PickUpScreen

const styles = StyleSheet.create({
    SafeAreaView: {
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor:"white",
        padding:10,
        marginHorizontal:7,
        borderRadius:10

      },
      heading:{
        fontSize: 20,  
      },
      inputCont:{
        marginTop:10,
        marginBottom:3,
      },
      inputBox:{
        borderWidth:2,
        borderColor:"lightgrey",
        borderRadius:10,
        padding:40,
        paddingLeft:5,
        paddingTop:0,
        paddingVertical:80,
      },
      scrollCont:{
        marginTop:10,
        padding:10,
        backgroundColor:"#ffff",
        marginHorizontal:7,
        alignItems:"center",
        borderRadius:10,
      },
      btnCont:{
        paddingHorizontal:5,
      },
      btn:{
        backgroundColor:"grey",
        padding:10,
        borderRadius:10,
      }
})