import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CompleteProfile_02 = ({ navigation }) => {
  const [selectedLevels, setSelectedLevels] = useState([]);

  const experienceLevels = [
    "Fresher / Entry Level",
    "Junior",
    "Mid-Senior",
    "Senior",
    "Executive",
  ];

  const toggleSelection = (level) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((item) => item !== level)
        : [...prev, level]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
  <Image
    source={require("../../assets/Left.png")}
    style={{ width: 24, height: 24, resizeMode: "contain" }}
  />
</TouchableOpacity>


        {/* Progress bars - first active */}
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressBar,
                index === 0 && styles.progressActive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.progressText}>2/4</Text>
      </View>

      <View style={styles.underline} />

      {/* Title */}
      <Text style={styles.title}>What is your Level of Experience</Text>

      {/* Checkbox list */}
      <View style={styles.checkboxContainer}>
        {experienceLevels.map((level, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxButton}
            onPress={() => toggleSelection(level)}
          >
            <View
              style={[
                styles.checkboxBox,
                selectedLevels.includes(level) && styles.boxChecked,
              ]}
            >
              {selectedLevels.includes(level) && (
                <Icon name="check" size={14} color="#fff" />
              )}
            </View>

            <Text style={styles.checkboxText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity
      
        style={[
          styles.nextButton,
          selectedLevels.length > 0 ? styles.nextActive : styles.nextDisabled,
        ]}
        disabled={selectedLevels.length === 0}
        onPress={() => navigation.navigate("CompleteProfile03")}
      >
        <Text
          style={[
            styles.nextText,
            selectedLevels.length > 0
              ? styles.nextTextActive
              : styles.nextTextDisabled,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompleteProfile_02;

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
    justifyContent: "space-between",
  },
  progressContainer: {
    flexDirection: "row",
    gap: 5,
  },
  progressBar: {
    width: 25,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  progressActive: {
    backgroundColor: "#288807",
  },
  progressText: {
    color: "#333",
    fontWeight: "600",
  },
  underline: {
    height: 1,
    backgroundColor: "#ddd",
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },
  checkboxContainer: {
    marginBottom: 50,
  },
  checkboxButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#999",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    backgroundColor: "#288807",
    borderColor: "#0C64AE",
  },
  checkboxText: {
    fontSize: 16,
    color: "#000",
  },
  nextButton: {
    height: 55,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  nextDisabled: {
    backgroundColor: "#ccc",
  },
  nextActive: {
    backgroundColor: "#0C64AE",
  },
  nextText: {
    fontSize: 18,
    fontWeight: "600",
  },
  nextTextDisabled: {
    color: "#777",
  },
  nextTextActive: {
    color: "#fff",
  },
});
