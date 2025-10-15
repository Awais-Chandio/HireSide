// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";

// const CompleteProfile_01 = ({ navigation }) => {
//   const [selectedJobs, setSelectedJobs] = useState([]);

//   const jobTypes = [
//     "Full-time",
//     "Part-time",
//     "Contract",
//     "Internship",
//   ];

//   const toggleSelection = (job) => {
//     setSelectedJobs((prev) =>
//       prev.includes(job)
//         ? prev.filter((item) => item !== job)
//         : [...prev, job]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="x" size={28} color="#000" />
//         </TouchableOpacity>

//         {/* Progress Bars (none active here) */}
//         <View style={styles.progressContainer}>
//           {[1, 2, 3, 4].map((bar, index) => (
//             <View key={index} style={styles.progressBar} />
//           ))}
//         </View>

//         <Text style={styles.progressText}>1/4</Text>
//       </View>

//       <View style={styles.underline} />

//       {/* Title & Subtitle */}
//       <Text style={styles.title}>What Type of Job Are You Interested In</Text>
//       <Text style={styles.subtitle}>You can select multiple job types</Text>

//       {/* Checkboxes */}
//       <View style={styles.checkboxContainer}>
//         {jobTypes.map((job, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.checkboxButton,
//               selectedJobs.includes(job) && styles.checkboxSelected,
//             ]}
//             onPress={() => toggleSelection(job)}
//           >
//             <Text
//               style={[
//                 styles.checkboxText,
//                 selectedJobs.includes(job) && styles.checkboxTextSelected,
//               ]}
//             >
//               {job}
//             </Text>
//           </TouchableOpacity>
//         ))}

//         {/* Freelance Option (Coming Soon) */}
//         <View style={[styles.checkboxButton, styles.disabledOption]}>
//           <Text style={[styles.checkboxText, { color: "#777" }]}>
//             Freelance
//           </Text>
//           <View style={styles.comingSoonBadge}>
//             <Text style={styles.comingSoonText}>Coming Soon</Text>
//           </View>
//         </View>
//       </View>

//       {/* Next Button */}
//       <TouchableOpacity
//         style={[
//           styles.nextButton,
//           selectedJobs.length > 0 ? styles.nextActive : styles.nextDisabled,
//         ]}
//         disabled={selectedJobs.length === 0}
//         onPress={() => navigation.navigate("CompleteProfile02")} // 👈 your next screen
//       >
//         <Text
//           style={[
//             styles.nextText,
//             selectedJobs.length > 0
//               ? styles.nextTextActive
//               : styles.nextTextDisabled,
//           ]}
//         >
//           Next
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CompleteProfile_01;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 25,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   progressContainer: {
//     flexDirection: "row",
//     gap: 5,
//   },
//   progressBar: {
//     width: 25,
//     height: 5,
//     borderRadius: 3,
//     backgroundColor: "#ccc", // none active for now
//   },
//   progressText: {
//     color: "#333",
//     fontWeight: "600",
//   },
//   underline: {
//     height: 1,
//     backgroundColor: "#ddd",
//     marginTop: 10,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 5,
//   },
//   subtitle: {
//     color: "#555",
//     fontSize: 15,
//     marginBottom: 30,
//   },
//   checkboxContainer: {
//     marginBottom: 50,
//   },
//   checkboxButton: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingVertical: 14,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   checkboxSelected: {
//     borderColor: "#0C64AE",
//     backgroundColor: "#E8F3FB",
//   },
//   checkboxText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   checkboxTextSelected: {
//     color: "#0C64AE",
//     fontWeight: "600",
//   },
//   disabledOption: {
//     backgroundColor: "#f2f2f2",
//     borderColor: "#eee",
//   },
//   comingSoonBadge: {
//     backgroundColor: "#0C64AE",
//     paddingVertical: 3,
//     paddingHorizontal: 10,
//     borderRadius: 15,
//   },
//   comingSoonText: {
//     color: "#fff",
//     fontSize: 12,
//     fontWeight: "500",
//   },
//   nextButton: {
//     height: 55,
//     borderRadius: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   nextDisabled: {
//     backgroundColor: "#ccc",
//   },
//   nextActive: {
//     backgroundColor: "#0C64AE",
//   },
//   nextText: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   nextTextDisabled: {
//     color: "#777",
//   },
//   nextTextActive: {
//     color: "#fff",
//   },
// });


import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CompleteProfile_01 = ({ navigation }) => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

  const toggleSelection = (job) => {
    setSelectedJobs((prev) =>
      prev.includes(job)
        ? prev.filter((item) => item !== job)
        : [...prev, job]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>X</Text>
        </TouchableOpacity>

        {/* Progress Bars (none active here) */}
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((bar, index) => (
            <View key={index} style={styles.progressBar} />
          ))}
        </View>

        <Text style={styles.progressText}>1/4</Text>
      </View>

      <View style={styles.underline} />

      {/* Title & Subtitle */}
      <Text style={styles.title}>What Type of Job Are You Interested In</Text>
      <Text style={styles.subtitle}>You can select multiple job types</Text>

      {/* Checkboxes */}
      <View style={styles.checkboxContainer}>
        {jobTypes.map((job, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxButton}
            onPress={() => toggleSelection(job)}
          >
            <View
              style={[
                styles.checkboxSquare,
                selectedJobs.includes(job) && styles.checkboxSquareActive,
              ]}
            >
              {selectedJobs.includes(job) && (
                <Icon name="check" size={16} color="#fff" />
              )}
            </View>

            <Text
              style={[
                styles.checkboxText,
                selectedJobs.includes(job) && styles.checkboxTextSelected,
              ]}
            >
              {job}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Freelance Option (Disabled but checked, blue box) */}
        <View style={[styles.checkboxButton, styles.disabledOption]}>
          <View style={[styles.checkboxSquare, { backgroundColor: "#0C64AE", borderColor: "#0C64AE" }]}>
            <Icon name="check" size={16} color="#fff" />
          </View>
          <Text style={[styles.checkboxText, { color: "#777" }]}>
            Freelance
          </Text>
          <View style={styles.comingSoonBadge}>
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </View>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedJobs.length > 0 ? styles.nextActive : styles.nextDisabled,
        ]}
        disabled={selectedJobs.length === 0}
        onPress={() => navigation.navigate("CompleteProfile02")}
      >
        <Text
          style={[
            styles.nextText,
            selectedJobs.length > 0
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

export default CompleteProfile_01;

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
    marginBottom: 5,
  },
  subtitle: {
    color: "#555",
    fontSize: 15,
    marginBottom: 30,
  },
  checkboxContainer: {
    marginBottom: 50,
  },
  checkboxButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  checkboxSquare: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSquareActive: {
    backgroundColor: "#288807",
    borderColor: "#288807",
  },
  checkboxText: {
    fontSize: 16,
    color: "#000",
  },
  checkboxTextSelected: {
    color: "#000",
    fontWeight: "600",
  },
  disabledOption: {
    backgroundColor: "#f2f2f2",
    borderColor: "#eee",
    justifyContent: "space-between",
  },
  comingSoonBadge: {
    backgroundColor: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
  },
  comingSoonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
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
