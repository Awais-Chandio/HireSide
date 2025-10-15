import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [agree, setAgree] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
      <Text style={styles.Title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information below or register with your social account
      </Text>

    
      <View style={styles.inputContainer}>
        <Image source={require("../../assets/user.png")} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
        />
      </View>

     
      <View style={[styles.inputContainer, { marginTop: 25 }]}>
        <Image
          source={require("../../assets/emailicon.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

    
      <View style={[styles.inputContainer, { marginTop: 25 }]}>
        <Image source={require("../../assets/key.png")} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={() => setAgree(!agree)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, agree && styles.checkedBox]}>
            {agree && <Icon name="check" size={16} color="#fff" />}
          </View>
          <Text style={styles.rememberText}>Agree with </Text>
          <TouchableOpacity onPress={() => setAgree(!agree)}>
            <Text style={styles.termsText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

  
      <TouchableOpacity
        style={styles.signinbutton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

   
      <Text style={styles.signInWith}>Or sign up with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

    
      <View style={styles.signupContainer}>
        <Text style={styles.noAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
          <Text style={styles.signupText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        style={styles.bottomModal}
        swipeDirection={["down", "up"]}
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        propagateSwipe={true}
      >
        <View style={styles.modalContent}>
        
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Ahsan, Welcome Aboard</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.modalSubtitle}>
            Please, proceed to complete your profile.
          </Text>

         
          <Image
            source={require("../../assets/slidemodal.png")}
            style={styles.modalImage}
            resizeMode="contain"
          />

        
          <Text style={styles.modalDescription}>
            For personalized job recommendations and faster interview invitations, 
            we'd love to learn a little more about you.
          </Text>

          
          <View style={styles.infoBox}>
            <Image
              source={require("../../assets/bulf.png")}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>
              Recruiters search by specific skills. Complete your profile to get
              noticed and stand out.
            </Text>
          </View>

          
          <TouchableOpacity style={styles.completeButton}
          onPress={() => navigation.navigate("CompleteProfile01")}
          >
            <Text style={styles.completeButtonText}>Complete Profile Now</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.laterText}>
              Not now, I'll explore later.
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SignUpScreen;

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
    width: 38,
    height: 38,
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
  termsText: {
    fontSize: 15,
    color: "#0C64AE",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  signinbutton: {
    marginTop: 45,
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
    marginTop: 25,
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

 
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "85%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  closeButton: {
    fontSize: 22,
    color: "#888",
  },
  modalSubtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 5,
    marginBottom: 15,
  },
  modalImage: {
    width: "100%",
    height: 180,
    alignSelf: "center",
  },
  modalDescription: {
    fontSize: 14,
    color: "#333",
    marginTop: 15,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  infoIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  infoText: {
    fontSize: 13,
    color: "#555",
    flex: 1,
  },
  completeButton: {
    backgroundColor: "#0C64AE",
    borderRadius: 25,
    marginTop: 25,
    paddingVertical: 12,
    alignItems: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  laterText: {
    marginTop: 15,
    textAlign: "center",
    color: "#0C64AE",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
