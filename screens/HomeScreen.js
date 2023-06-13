import {StyleSheet,StatusBar} from "react-native";
import React from "react";
import Carousel from "../components/Carousel";
import ServicesComp from "../components/ServicesComp";
import ProductComp from "../components/ProductComp";
import { SafeAreaView } from "react-native";
import LoctBar from "../components/LoctBar";

const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.SafeAreaView}>
        <LoctBar/>
        <Carousel />
        <ServicesComp />
        <ProductComp/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 7,
  }
});

export default HomeScreen;