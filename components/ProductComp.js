import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import React from 'react'
import { Products } from "../data/Products";

const ProductComp = () => {
  return (

    <ScrollView
      contentContainerStyle={styles.container}
      vertical
      persistentScrollbar={true}       
    >
      {Products.map((item) => (
        <View style={styles.card} key={item.id}>
          <View style={styles.imgCont}>
          <Image source={{uri: item.image}} style={styles.image}/>
          </View>
          <View style={styles.itemDesc}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.name}>${item.price}</Text>
          </View>
          <View style={styles.btn}>
          <Button title='Add'></Button>
          </View>
        </View>
      ))}

    </ScrollView>

  )
}

export default ProductComp


const styles = StyleSheet.create({
  scrollCont:{
    marginTop:10,
    padding:5,
    backgroundColor:"black",
    marginHorizontal:7,
    alignItems:"center",
    borderRadius:10,
  },
  heading:{
    fontSize: 24,
    fontWeight: '600'
  },
  container:{
    borderRadius:10,
    marginHorizontal:7,
    marginTop:10,
  },  
  card:{
    backgroundColor:"#ffff",
    padding:7,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    marginVertical:5,
    justifyContent:"space-between"
  },
  imgCont:{
    marginLeft:7,
  },
  image:{
    width:100,
    height:100
  },
  name:{
    fontSize: 18,
    fontWeight: '600',
  },
  itemDesc:{
    marginLeft:15,
    flex:1,
    alignItems:'flex-start',
    //backgroundColor:'red'
  },
  btn:{
    flex:0.3,
    marginRight:7
  }
});