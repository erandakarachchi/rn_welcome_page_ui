import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ColorPalette } from "../theme";

const deviceW = Dimensions.get("screen").width;
const Button = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: deviceW - 64,
    backgroundColor: ColorPalette.redPrimary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: ColorPalette.whitePrimary,
    fontFamily: "MontserratBold",
    fontSize: 18,
  },
});

export default Button;
