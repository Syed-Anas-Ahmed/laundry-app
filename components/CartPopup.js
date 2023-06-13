import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CartPopup = () => {
  return (
    <View style={styles.content}>
    <View>
      <Text>1 items</Text>
      <Text>extra charges may apply</Text>
      </View>
      <Pressable>
        <Text>Proceed To Card</Text>
      </Pressable>
    </View>
  )
}

export default CartPopup

const styles = StyleSheet.create({
    content: {
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 10,
        marginLeft: 7,
        marginRight: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginBottom: 10
      },
})