import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CompleteProfile_04 = ({ navigation }) => {
  const [selectedTitles, setSelectedTitles] = useState([]);

  const jobTitles = [
    "Digital Content Creator",
    "Creative Director",
    "UI UX Designer",
    "User Interface Designer",
    "User Experience Designer",
    "Illustrator",
    "3D Designer",
    "Interactive Designer",
    "Brand Identity Designer",
  ];

  const toggleSelection = (title) => {
    setSelectedTitles((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
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

        {/* Progress bars - first 3 active */}
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressBar,
                index < 3 && styles.progressActive, // ✅ First 3 active
              ]}
            />
          ))}
        </View>

        <Text style={styles.progressText}>4/4</Text>
      </View>

      <View style={styles.underline} />

      {/* Title and Subtitle */}
      <Text style={styles.title}>What Job Title are you Seeking</Text>
      <Text style={styles.subtitle}>
        You can select multiple job titles
      </Text>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for a Job Title"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <Image
          source={require("../../assets/search.png")}
          style={styles.searchIcon}
        />
      </View>

      {/* Selected Titles Section */}
      {selectedTitles.length > 0 && (
        <View style={styles.selectedContainer}>
          {selectedTitles.map((title, index) => (
            <View key={index} style={styles.selectedTag}>
              <Text style={styles.selectedText}>{title}</Text>
              <TouchableOpacity
                onPress={() =>
                  setSelectedTitles((prev) =>
                    prev.filter((item) => item !== title)
                  )
                }
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* Similar Titles Section */}
      <Text style={[styles.title, { marginTop: 25 }]}>
        Similar Job Titles
      </Text>
      <Text style={styles.subtitle}>
        Recruiters are hiring candidates in these professional fields as well
      </Text>

      {/* Checkbox Grid */}
      <ScrollView contentContainerStyle={styles.checkboxGrid}>
        {jobTitles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxButton}
            onPress={() => toggleSelection(title)}
          >
            <View
              style={[
                styles.checkboxBox,
                selectedTitles.includes(title) && styles.boxChecked,
              ]}
            >
              {selectedTitles.includes(title) && (
                <Icon name="check" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.checkboxText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Next Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedTitles.length > 0
              ? styles.nextActive
              : styles.nextDisabled,
          ]}
          disabled={selectedTitles.length === 0}
          onPress={() => navigation.navigate("CompleteProfile05")}
        >
          <Text
            style={[
              styles.nextText,
              selectedTitles.length > 0
                ? styles.nextTextActive
                : styles.nextTextDisabled,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteProfile_04;

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
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    height: 45,
    color: "#000",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#999",
  },
  selectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  selectedTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 5,
  },
  selectedText: {
    color: "black",
    fontSize: 13,
  },
  checkboxGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 80, // space for button
  },
  checkboxButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#999",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    backgroundColor: "#288807",
    borderColor: "#288807",
  },
  checkboxText: {
    fontSize: 14,
    color: "#000",
  },
  bottomButtonContainer: {
    paddingVertical: 15,
  },
  nextButton: {
    height: 55,
    borderRadius: 40,
    marginBottom:15,
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
