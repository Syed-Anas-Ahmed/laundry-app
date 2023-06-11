import {
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "We Are loading your current location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      ToastAndroid.show(
        "Location Services are not enabled",
        ToastAndroid.SHORT
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      ToastAndroid.show(
        "Location Services are not enabled",
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response);

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.district}, ${item.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{displayCurrentAddress}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
