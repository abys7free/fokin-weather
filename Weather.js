import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#FFE000", "#00416A"],
    title: "Thunderstorm",
    subtitle: "Pikachu!!!!!"
  },
  Drizzle: {
    iconName: "weather-snowy-rainy",
    gradient: ["#0082c8", "#667db6"],
    title: "Drizzle",
    subtitle: "Standing in the drizzle"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#2c3e50", "#3498db"],
    title: "Rainy",
    subtitle: "Season B Season"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#FFFFFF", "#232526"],
    title: "Snowy",
    subtitle: "White World"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FFFFFF", "#6DD5FA", "#2980B9"],
    title: "Sunny",
    subtitle: "All Clear"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#373B44", "#4286f4"],
    title: "Cloudy",
    subtitle: "You don't need a sun cream"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Mist",
    subtitle: "Give it to your skin"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Smoke",
    subtitle: "Wear a mask"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Dust",
    subtitle: "Wear a mask"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Fog",
    subtitle: "watch out of sight"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Sand",
    subtitle: "Sand?"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Dust",
    subtitle: "Wear a mask"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Ash",
    subtitle: "Volcano?"
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#acb6e5", "#86fde8"],
    title: "Squall",
    subtitle: "Umbrella, plz"
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#333333", "#dd1818"],
    title: "Tornade",
    subtitle: "wiiiindyyyy"
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={
        weatherOptions[condition]
          ? weatherOptions[condition].gradient
          : ["#1565C0", "#b92b27"]
      }
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={
            weatherOptions[condition]
              ? weatherOptions[condition].iconName
              : "weather-sunset"
          }
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
      <View style={styles.textContainer}>

        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1
  }
});
