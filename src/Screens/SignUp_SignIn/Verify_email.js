// VerifyCodeScreen.js
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerifyEmailScreen = () => {
  const navigation = useNavigation();

  const refs = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  };

  const [digits, setDigits] = useState(["", "", "", ""]);

  const handleChange = (text, idx) => {
    const clean = text.replace(/[^0-9]/g, "");
    if (!clean) {
      const copy = [...digits];
      copy[idx] = "";
      setDigits(copy);
      return;
    }

    const copy = [...digits];
    copy[idx] = clean;
    setDigits(copy);

    if (clean && idx < 3) {
      refs[idx + 1].current?.focus();
    } else if (idx === 3) {
      refs[3].current?.blur();
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = ({ nativeEvent }, idx) => {
    if (nativeEvent.key === "Backspace") {
      if (digits[idx] === "" && idx > 0) {
        refs[idx - 1].current?.focus();
        const copy = [...digits];
        copy[idx - 1] = "";
        setDigits(copy);
      } else {
        const copy = [...digits];
        copy[idx] = "";
        setDigits(copy);
      }
    }
  };

  const isComplete = digits.join("").length === 4;

  const onVerify = () => {
    if (!isComplete) return;
    const code = digits.join("");
    navigation.navigate("Newpassword");
  };

  const onResend = () => {
    // reset all boxes and focus first one
    setDigits(["", "", "", ""]);
    refs[0].current?.focus();
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button (image) */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image
            source={require("../../assets/Left.png")}
            style={styles.backImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* 🧾 Title + Subtitle */}
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email{" "}
        <Text style={styles.emailText}>Example@gmail.com</Text>
      </Text>

      {/* 🔢 OTP Input Boxes */}
      <View style={styles.otpRow}>
        {[0, 1, 2, 3].map((i) => (
          <TextInput
            key={i}
            ref={refs[i]}
            value={digits[i]}
            onChangeText={(t) => handleChange(t, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.otpInput}
            textAlign="center"
            autoFocus={i === 0}
            returnKeyType="done"
          />
        ))}
      </View>

      {/* ⏳ Dummy Timer */}
      <Text style={styles.timerText}>
        Code is expiring in <Text style={styles.timerValue}>0:57</Text>
      </Text>

      {/* 📩 Resend Section */}
      <View style={styles.resendContainer}>
        <Text style={styles.didntReceive}>Didn't receive OTP?</Text>
        <TouchableOpacity onPress={onResend}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Verify Button */}
      <TouchableOpacity
        style={[styles.verifyButton, !isComplete && styles.verifyButtonDisabled]}
        onPress={onVerify}
        activeOpacity={0.8}
        disabled={!isComplete}

        
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  topBar: {
    height: 40,
    justifyContent: "center",
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backImage: {
    width: 22,
    height: 22,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#333",
    marginTop: 8,
    lineHeight: 20,
  },
  emailText: {
    fontWeight: "600",
    color: "#0C64AE",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 64,
    height: 66,
    borderWidth: 1.2,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
  timerText: {
    marginTop: 18,
    textAlign: "center",
    color: "#333",
    fontSize: 14,
  },
  timerValue: {
    fontWeight: "600",
    color: "#0C64AE",
  },
  resendContainer: {
    marginTop: 18,
    alignItems: "center",
  },
  didntReceive: {
    color: "#333",
    fontSize: 14,
  },
  resendText: {
    marginTop: 6,
    color: "#0C64AE",
    fontSize: 15,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  verifyButton: {
    marginTop: 30,
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
  verifyButtonDisabled: {
    opacity: 0.6,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
