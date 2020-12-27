import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { OnboardContainer } from "./components";
import { Ionicons } from "@expo/vector-icons";

const customFonts = {
  MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  MontserratBlack: require("./assets/fonts/Montserrat-Black.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const _toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={
        isDarkMode
          ? styles.safeAreaContainerDark
          : styles.safeAreaContainerLight
      }
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={_toggleMode}>
            <Ionicons
              name={isDarkMode ? "sunny-outline" : "moon-outline"}
              size={20}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <OnboardContainer />
        <StatusBar style={isDarkMode ? "light" : "dark"}   />
      </View>
    </SafeAreaView>
  );
}

const deviceW = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  safeAreaContainerDark: {
    flex: 1,
    backgroundColor: "#000",
  },
  safeAreaContainerLight: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  iconContainer: {
    width: deviceW - 64,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
