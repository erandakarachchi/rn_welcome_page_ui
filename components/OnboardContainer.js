import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InitialOnboard from "./InitialOnboard";
import Button from "./Button";
import { ColorPalette } from "../theme";

const OnboardContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appNameTitle}>SHOFFY</Text>
      <Text style={styles.appDescriptionTitle}>
        Your ultimate shopping pal.
      </Text>
      <InitialOnboard />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  appNameTitle: {
    paddingTop: 24,
    color: ColorPalette.yellowPrimary,
    fontSize: 40,
    fontFamily: "MontserratBold",
  },
  appDescriptionTitle: {
    color: ColorPalette.greyPrimary,
    fontFamily: "MontserratRegular",
  },
});

export default OnboardContainer;
