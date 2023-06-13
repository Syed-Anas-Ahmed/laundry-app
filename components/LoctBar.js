import {Pressable,Image,StyleSheet,Text,ToastAndroid,View,TextInput,StatusBar} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

const LoctBar = () => {
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
      ToastAndroid.show("Location Services are not enabled");
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
    <>
      <View style={styles.content}>
        <Ionicons name="location" size={30} color="red" />
        <View>
          <Text style={styles.homeHeading}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable style={styles.imageCont}>
          <Image
            style={styles.image}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/AOLn63EF9d08rDiCEJvTEnBrhyvmZgXxXnxQV4fC1P6EeuA=s32-c-mo",
            }}
          />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchField}>
          <TextInput placeholder="Search for Items"></TextInput>
          <Ionicons name="search" size={24} color="#797979" />
        </View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 7,
  },
  content: {
    backgroundColor: "#ffff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    marginLeft: 7,
    marginRight: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  homeHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  imageCont: {
    marginLeft: "auto",
  },
  searchContainer: {
    flexDirection: "row",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#b5b5b5",
    backgroundColor: "#ffff",
    justifyContent: "space-between",
    padding: 15,
    marginLeft: 7,
    marginRight: 7,
    alignItems: "center",
  },
  searchField: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    padding: 7,
    borderColor: "lightgrey",
    justifyContent: "space-between",
  },
});

export default LoctBar;