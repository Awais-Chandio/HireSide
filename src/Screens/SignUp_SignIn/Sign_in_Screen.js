import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native"; // for check icon


const SignInScreen = () => {
  const [remember, setRemember] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back. you've been missed</Text>

      {/* 👤 Username Field */}
      <View style={styles.inputContainer}>
        <Image source={require("../../assets/user.png")} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#999"
        />
      </View>

      {/* 🔒 Password Field */}
      <View style={[styles.inputContainer, { marginTop: 25 }]}>
        <Image source={require("../../assets/key.png")} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      {/* ✅ Remember me + Forgot password */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={() => setRemember(!remember)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, remember && styles.checkedBox]}>
            {remember && <Icon name="check" size={16} color="#fff" />}
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("verifyEmail")}
        >

          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* 🔘 Sign In Button */}
      <TouchableOpacity style={styles.signinbutton}
      onPress={()=>navigation.navigate("MainTabs")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* 🌐 Sign in with section */}
      <Text style={styles.signInWith}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../assets/icon.png")} style={styles.socialIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../assets/google.png")} style={styles.socialIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../assets/facebook.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* 🧾 Sign Up text */}
      <View style={styles.signupContainer}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("signup")}
        
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 90,
  },
  Title: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 17,
    marginTop: 8,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    height: 66,
    marginTop: 60,
    paddingHorizontal: 10,
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 10,
    tintColor: "black",
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: "black",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#999",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkedBox: {
    backgroundColor: "green",
  },
  rememberText: {
    fontSize: 15,
    color: "#333",
  },
  forgotText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
     textDecorationLine: "underline",
  },
  signinbutton: {
    marginTop: 90,
    backgroundColor: "#0C64AE",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 45,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },
  signInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  signInWith: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 15,
    color: "#333",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  socialButton: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
    borderWidth: 1.2,
    borderColor: "#ccc",
  },
  socialIcon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  noAccountText: {
    fontSize: 15,
    color: "#333",
  },
  signupText: {
    fontSize: 15,
    color: "#0C64AE",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
