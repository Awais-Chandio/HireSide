import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* --- Skip Button --- */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("Login")} // 👈 skip directly
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* --- Title --- */}
      <Text style={styles.title}>No Resume? No Problem</Text> {/* 🔹 CHANGED */}

      {/* --- Subtitle --- */}
      <Text style={styles.subtitle}>
        Create a profile with ease and apply hassle-free. Elevate your job
        search without the need for a traditional resume. It's that simple!
      </Text> {/* 🔹 CHANGED */}

      {/* --- Illustration --- */}
      <Image
        source={require("../../assets/Illustration2.png")} // 🔹 CHANGED
        style={styles.image}
        resizeMode="contain"
      />

      {/* --- Navigation Buttons --- */}
      <View style={styles.navRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Onboarding1")}
          style={styles.navButton}
        >
          <Image
            source={require("../../assets/Back_Frame.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingScreen3")}
          style={styles.navButton}
        >
          <Image
            source={require("../../assets/Next_Frame.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* --- Pagination Dots --- */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} /> {/* 🔹 active second dot */}
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    paddingTop: 60,
  },

  /* --- Skip Button --- */
  skipButton: {
    position: "absolute",
    top: 50,
    right: 25,
  },
  skipText: {
    color: "#0C64AE",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* --- Title & Subtitle --- */
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C64AE",
    textAlign: "left",
    marginTop: 90,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#555",
    textAlign: "left",
    marginRight: 40,
    marginBottom: 40,
    lineHeight: 24,
  },

  /* --- Illustration --- */
  image: {
    width: width * 0.95,
    height: width * 0.95,
    alignSelf: "center",
    marginBottom: 60,
  },

  /* --- Navigation Buttons --- */
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 90,
  },
  navButton: {
    padding: 10,
  },
  icon: {
    width: 45,
    height: 45,
  },

  /* --- Pagination Dots --- */
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#0C64AE",
  },
});
