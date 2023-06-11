import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import { Services } from "../data/Services";

const ServicesComp = () => {
  return (
    <View style={styles.scrollCont}>
      <Text style={styles.heading}>Services</Text>
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal   
    >
      {Services.map((item) => (
        <TouchableOpacity style={styles.card} key={item.id}>
          <Image source={{uri: item.image}} style={styles.image}/>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      ))}

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollCont:{
    marginTop:10,
    padding:5,
    backgroundColor:"#ffff",
    marginHorizontal:7,
    alignItems:"center",
    borderRadius:10,
  },
  heading:{
    fontSize: 24,
    fontWeight: '600'
  },
  container:{
    marginBottom:10
  },  
  card:{
    backgroundColor:"#ffff",
    padding:7,
    borderRadius:10,
    alignItems:"center",
    marginHorizontal:3
  },
  image:{
    width:100,
    height:100
  },
  name:{
    fontSize: 18,
    fontWeight: '600',
  }
});

export default ServicesComp;
