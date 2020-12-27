import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";

const deviceW = Dimensions.get("screen").width;
const deviceH = Dimensions.get("screen").height;

const InitialOnboard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/shop_01.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: deviceH * 0.3,
    width: deviceW * 0.9,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontFamily: "MontserratBold",
  },
});

export default InitialOnboard;
