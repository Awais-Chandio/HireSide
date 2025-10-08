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

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("Login")} 
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

     
      <Text style={styles.title}>Job Alerts on the go!</Text>

     
      <Text style={styles.subtitle}>
        HireSide is a revolutionary platform that connects talented individuals
        with top companies.
      </Text>

     
      <Image
        source={require("../../assets/Illustration.png")}
        style={styles.image}
        resizeMode="contain"
      />

      
      <View style={styles.navRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navButton}
        >
          <Image
            source={require("../../assets/Back_Frame.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Onboarding2")}
          style={styles.navButton}
        >
          <Image
            source={require("../../assets/Next_Frame.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30, 
    paddingTop: 60,
  },

 
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


  image: {
    width: width * 0.95, 
    height: width * 0.95, 
    alignSelf: "center", 
    marginBottom: 60,
  },


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
