import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";

const CompleteProfile_05 = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const genderOptions = ["Male", "Female", "Other"];

  return (
    <View style={styles.container}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/Left.png")}
            style={{ width: 24, height: 24, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>

      
      <View style={styles.underline} />

    
      <Text style={styles.title}>Great Jobs, Almost Done!</Text>
      <Text style={styles.subtitle}>
        Don't worry, only you can see your personal data. No one else will be
        able to see it.
      </Text>

     
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require("../../assets/gallery.png")}
          style={styles.image}
        />
      </TouchableOpacity>

     
      <Text style={styles.label}>Phone Number</Text>

    
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/user.png")}
          style={styles.icon}
        />
        <TextInput
        
          style={styles.input}
          value="+92 336 123"
          placeholderTextColor="#666"
          
          
          />
      </View>


      <Text style={[styles.label, { marginTop: 20 }]}>Gender</Text>

     
      <View>
        <TouchableOpacity
          style={styles.dropdownContainer}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text style={styles.dropdownText}>
            {selectedGender ? selectedGender : "Select Gender"}
          </Text>
          <Image
            source={require("../../assets/dropdown.png")}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>

     
        {showDropdown && (
          <View style={styles.dropdownOptions}>
            {genderOptions.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedGender(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

     
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeText}>Complete Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompleteProfile_05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  underline: {
    height: 1,
    backgroundColor: "#ddd",
    marginTop: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 30,
  },
  imageContainer: {
    alignSelf: "center",
    marginBottom: 30,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 55,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  dropdownIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 5,
    elevation: 3,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#000",
  },
  completeButton: {
    backgroundColor: "#0C64AE",
    borderRadius: 40,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  completeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
