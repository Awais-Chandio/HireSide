// NewPasswordScreen.js
import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 🔙 Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../../assets/Left.png")} style={styles.backIcon} />
      </TouchableOpacity>

      {/* 🏷️ Title */}
      <Text style={styles.title}>New Password</Text>

      {/* 💬 Subtitle */}
      <Text style={styles.subtitle}>
        Your password should be different from previously{"\n"}used passwords.
      </Text>

      {/* 🔒 Password Inputs */}
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TextInput
        style={[styles.input, { marginTop: 15 }]}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
      />

      {/* 📋 Password Rules */}
      <View style={styles.rulesContainer}>
        <Text style={styles.rule}>8 Characters minimum</Text>
        <Text style={styles.rule}>Must contain one number</Text>
        <Text style={styles.rule}>Atleast one upper case</Text>
        <Text style={styles.rule}>Confirm password match</Text>
      </View>

      {/* ✅ Create New Password Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create New Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 25,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 60,
  },
  subtitle: {
    fontSize: 15,
    color: "#333",
    marginTop: 10,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 50,
    marginTop: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  rulesContainer: {
    marginTop: 25,
    padding:10,
    gap:5,
    paddingLeft:20
  },
  rule: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  createButton: {
    marginTop: 40,
    backgroundColor: "#0C64AE",
    height: 55,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
