import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CompleteProfile_03 = ({ navigation }) => {
  const [selectedModels, setSelectedModels] = useState([]);

  const workingModels = ["On-site", "Hybrid", "Remote"];

  const toggleSelection = (model) => {
    setSelectedModels((prev) =>
      prev.includes(model)
        ? prev.filter((item) => item !== model)
        : [...prev, model]
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

        {/* Progress bars - first and second active, third current */}
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressBar,
                index <= 1 && styles.progressActive, // ✅ 1st, 2nd, and 3rd active
              ]}
            />
          ))}
        </View>

        <Text style={styles.progressText}>3/4</Text>
      </View>

      <View style={styles.underline} />

      {/* Title */}
      <Text style={styles.title}>Preferred Working Model:</Text>
      <Text style={styles.subtitle}>
        You can select multiple working models
      </Text>

      {/* Checkbox list */}
      <View style={styles.checkboxContainer}>
        {workingModels.map((model, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxButton}
            onPress={() => toggleSelection(model)}
          >
            <View
              style={[
                styles.checkboxBox,
                selectedModels.includes(model) && styles.boxChecked,
              ]}
            >
              {selectedModels.includes(model) && (
                <Icon name="check" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.checkboxText}>{model}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedModels.length > 0 ? styles.nextActive : styles.nextDisabled,
        ]}
        disabled={selectedModels.length === 0}
        onPress={() => navigation.navigate("CompleteProfile04")}
      >
        <Text
          style={[
            styles.nextText,
            selectedModels.length > 0
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

export default CompleteProfile_03;

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
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    marginTop: 5,
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
