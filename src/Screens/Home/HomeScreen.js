// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";
// import Modal from "react-native-modal";

// const HomeScreen = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState("Jobs");
//   const [isModalVisible, setModalVisible] = useState(false);

//   const handleTabPress = (tab) => {
//     if (tab === "News") {
//       setModalVisible(true);
//     } else {
//       setModalVisible(false);
//       setActiveTab("Jobs");
//     }
//   };

//   const isJobsActive = !isModalVisible;
//   const isNewsActive = isModalVisible;

//   return (
//     <View style={styles.screen}>
//       {/* 🔹 Top Header */}
//       <View style={styles.topHeader}>
//         <View style={styles.topRow}>
//           <View style={styles.leftRow}>
//             <Image source={require("../../assets/dp.png")} style={styles.dp} />
//             <View style={styles.welcomeWrap}>
//               <Text style={styles.welcomeSmall}>Welcome,</Text>
//               <Text style={styles.welcomeName}>Ahsan Qazi</Text>
//             </View>
//           </View>

//           <Image
//             source={require("../../assets/headericon.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//         </View>

//         <Text style={styles.headerTitle}>Find the job you deserve</Text>

//         <View style={styles.searchRow}>
//           <TextInput
//             placeholder="Search Job, Company & Role"
//             placeholderTextColor="#999"
//             style={styles.searchInput}
//             underlineColorAndroid="transparent"
//           />
//           <TouchableOpacity style={styles.searchIconWrap}>
//             <Image
//               source={require("../../assets/search.png")}
//               style={styles.searchIcon}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* 🔹 Bottom Area */}
//       <View style={styles.bottomArea}>
//         {/* Tabs */}
//         <View style={styles.segmentRow}>
//           <TouchableOpacity
//             style={[
//               styles.segmentButton,
//               isJobsActive ? styles.segmentActive : styles.segmentInactive,
//             ]}
//             onPress={() => handleTabPress("Jobs")}
//           >
//             <Text
//               style={[
//                 styles.segmentText,
//                 isJobsActive
//                   ? styles.segmentTextActive
//                   : styles.segmentTextInactive,
//               ]}
//             >
//               Jobs
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.segmentButton,
//               isNewsActive ? styles.segmentActive : styles.segmentInactive,
//             ]}
//             onPress={() => handleTabPress("News")}
//           >
//             <Text
//               style={[
//                 styles.segmentText,
//                 isNewsActive
//                   ? styles.segmentTextActive
//                   : styles.segmentTextInactive,
//               ]}
//             >
//               News Updates
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* 🔹 Content Scroll */}
//         <ScrollView
//           contentContainerStyle={styles.contentScroll}
//           showsVerticalScrollIndicator={false}
//         >
//           {activeTab === "Jobs" ? (
//             <>
//               {/* 🔹 Jobs For You */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Jobs For You</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* 🔹 Job Card */}
//               <View style={styles.jobCard}>
//                 <View style={styles.cardTopRow}>
//                   <Text style={styles.jobTitle}>Senior Python Developer</Text>
//                   <TouchableOpacity style={styles.saveBtn}>
//                     <Icon name="bookmark" size={25} color="#797c7eff" />
//                   </TouchableOpacity>
//                 </View>

//                 {/* Tags */}
//                 <View style={styles.tagsRow}>
//                   <View style={styles.tag1}>
//                     <Text style={styles.tag1Text}>Urgent</Text>
//                   </View>
//                   <View style={styles.tag}>
//                     <Text style={styles.tagText}>Full-Time</Text>
//                   </View>
//                   <View style={styles.tag}>
//                     <Text style={styles.tagText}>Remote</Text>
//                   </View>
//                 </View>

//                 {/* Salary */}
//                 <View style={styles.salaryWrap}>
//                   <Text style={styles.salaryText}>250k - 350k</Text>
//                 </View>

//                 {/* Applicants / Positions */}
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoText}>03 Applicants</Text>
//                   <Text style={styles.dot}>•</Text>
//                   <Text style={styles.infoText}>07 Positions</Text>
//                 </View>

//                 {/* Divider */}
//                 <View style={styles.cardDivider} />

//                 {/* Company Info */}
//                 <View style={styles.companyRow}>
//                   <View style={styles.companyLeft}>
//                     <Image
//                       source={require("../../assets/Microsoft.png")}
//                       style={styles.companyLogo}
//                       resizeMode="contain"
//                     />
//                     <Text style={styles.companyName}>
//                       Microsoft, Hyderabad
//                     </Text>
//                     <Image
//                       source={require("../../assets/verified.png")}
//                       style={styles.verifiedIcon}
//                       resizeMode="contain"
//                     />
//                   </View>
//                   <View style={styles.companyRight}>
//                     <Text style={styles.timeText}>5 hours ago</Text>
//                   </View>
//                 </View>
//                 <View style={styles.sheedi}>
//                   <Text style={styles.locationText}>Sheedi Goth</Text>
//                 </View>
//               </View>

//               {/* 🔹 Progress Dots */}
//               <View style={styles.progressDotsContainer}>
//                 {[1, 2, 3, 4].map((dot) => (
//                   <View
//                     key={dot}
//                     style={[
//                       styles.dotIndicator,
//                       dot === 3 && styles.activeDotIndicator,
//                     ]}
//                   />
//                 ))}
//               </View>

//               {/* 🔹 Job by Categories */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Job by Categories</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Grid Cards */}
//               <View style={styles.gridRow}>
//                 <View style={styles.categoryCard}>
//                   <Image
//                     source={require("../../assets/developement.png")}
//                     style={styles.categoryImage}
//                     resizeMode="contain"
//                   />
//                   <Text style={styles.categoryText}>Development</Text>
//                 </View>
//                 <View style={styles.categoryCard}>
//                   <Image
//                     source={require("../../assets/design.png")}
//                     style={styles.categoryImage}
//                     resizeMode="contain"
//                   />
//                   <Text style={styles.categoryText}>Design</Text>
//                 </View>
//               </View>
//             </>
//           ) : (
//             <>
//               {/* 🔹 News Updates */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Curated For You</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.newsCard}>
//                 <View style={styles.newsImageWrapper}>
//                   <Image
//                     source={require("../../assets/news.png")}
//                     style={styles.newsImage}
//                     resizeMode="cover"
//                   />
//                   <View style={styles.newsTopIcons}>
//                     <Image
//                       source={require("../../assets/star.png")}
//                       style={styles.starIcon}
//                       resizeMode="contain"
//                     />
//                     <Image
//                       source={require("../../assets/popular.png")}
//                       style={styles.popularIcon}
//                       resizeMode="contain"
//                     />
//                   </View>
//                 </View>

//                 <Text style={styles.newsTitle}>
//                   Bazaar Raises $70 Million in Series B to Digitize Pakistan's
//                   Digital Retail
//                 </Text>

//                 <View style={styles.newsUnderline} />

//                 <View style={styles.newsBottomRow}>
//                   <Image
//                     source={require("../../assets/yesterday.png")}
//                     style={styles.bottomIcon}
//                   />
//                   <Image
//                     source={require("../../assets/menu.png")}
//                     style={styles.bottomMenu}
//                   />
//                 </View>
//               </View>

//               <View style={styles.progressDotsContainer}>
//                 {[1, 2, 3, 4].map((dot) => (
//                   <View
//                     key={dot}
//                     style={[
//                       styles.dotIndicator,
//                       dot === 1 && styles.activeDotIndicator,
//                     ]}
//                   />
//                 ))}
//               </View>

//               <Text style={[styles.jobsTitle, { marginTop: 10 }]}>
//                 Top Featured
//               </Text>
//               <View style={styles.featuredCard}>
//                 <Image
//                   source={require("../../assets/featured.png")}
//                   style={styles.featuredImage}
//                   resizeMode="cover"
//                 />
//               </View>
//             </>
//           )}
//         </ScrollView>
//       </View>

//       {/* 🔹 Modal */}
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={() => setModalVisible(false)}
//         onBackButtonPress={() => setModalVisible(false)}
//         swipeDirection={["down", "up"]}
//         propagateSwipe={true}
//         style={styles.modalWrapper}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>
//               Ahsan, Let's customize your feeds
//             </Text>
//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButton}>✕</Text>
//             </TouchableOpacity>
//           </View>

//           <Image
//             source={require("../../assets/homemodal.png")}
//             style={styles.modalImage}
//             resizeMode="contain"
//           />

//           <Text style={styles.modalDescription}>
//             Follow your favourite companies and be the first one to receive News
//             updated, Job Alerts and announcement notifications at instance
//           </Text>

//           <View style={styles.infoBox}>
//             <Image
//               source={require("../../assets/bulf.png")}
//               style={styles.infoIcon}
//             />
//             <Text style={styles.infoText}>
//               Make sure your notifications are enabled in application settings
//               and phone settings as well
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.completeButton}
//             onPress={() => {
//               setModalVisible(false);
//               setActiveTab("News");
//             }}
//           >
//             <Text style={styles.completeButtonText}>Continue</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Text style={styles.laterText}>Not now, remind me later.</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HomeScreen;


// const styles = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: "#fff" },
//   topHeader: {
//     backgroundColor: "#E8F0F7",
//     paddingHorizontal: 18,
//     paddingTop: 18,
//     paddingBottom: 18,
//     marginTop: 60,
//     height: 230,
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   leftRow: { flexDirection: "row", alignItems: "center" },
//   dp: { width: 48, height: 48, borderRadius: 24 },
//   welcomeWrap: { marginLeft: 12 },
//   welcomeSmall: { fontSize: 13, color: "#333" },
//   welcomeName: { fontSize: 16, fontWeight: "400", color: "#000" },
//   logo: { width: 110, height: 35 },
//   headerTitle: {
//     marginTop: 14,
//     fontSize: 20,
//     fontWeight: "400",
//     color: "#000",
//   },
//   searchRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f3f9faff",
//     borderRadius: 10,
//     height: 46,
//     borderWidth: 1,
//     borderColor: "#fff",
//     overflow: "hidden",
//   },
//   searchInput: { flex: 1, paddingHorizontal: 12, fontSize: 15, color: "#000" },
//   searchIconWrap: {
//     paddingHorizontal: 12,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   searchIcon: { width: 20, height: 20, tintColor: "#333" },
//   bottomArea: {
//     flex: 1,
//     backgroundColor: "#f3f9faff",
//     paddingHorizontal: 18,
//     paddingTop: 16,
//   },

//   // ✅ Circular buttons
//   segmentRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   segmentButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     borderRadius: 25,
//     marginHorizontal: 4,
//     borderWidth: 1.5,
//     borderColor: "#0C64AE",
//   },
//   segmentActive: {
//     backgroundColor: "#0C64AE",
//   },
//   segmentInactive: {
//     backgroundColor: "#FFFFFF",
//   },
//   segmentText: { fontSize: 16, fontWeight: "400" },
//   segmentTextActive: { color: "#fff" },
//   segmentTextInactive: { color: "#0C64AE" },

//   contentScroll: { paddingBottom: 20 },
//   rowTitle: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     paddingTop: 6,
//   },
//   jobsTitle: { fontSize: 18, fontWeight: "700", color: "#000" },
//   viewAll: { color: "#75787aff", fontWeight: "600" },
//   jobCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 14,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     marginBottom: 14,
//     height: 250,
//   },
//   cardTopRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   jobTitle: { fontSize: 16, fontWeight: "700", color: "#000", flex: 1, marginRight: 8 },
//   saveBtn: { padding: 6, borderRadius: 8 },
//   tagsRow: { flexDirection: "row", marginTop: 10 },
//   tag1: { backgroundColor: "#F9DEDC", paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6, marginRight: 8 },
//   tag: { backgroundColor: "#f5f7faff", paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6, marginRight: 8 },
//   tag1Text: { fontSize: 12, color: "#333", fontWeight: "600" },
//   tagText: { fontSize: 12, color: "#333", fontWeight: "600" },
//   salaryWrap: { marginTop: 12 },
//   salaryText: { fontSize: 15, fontWeight: "500" },
//   infoRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
//   infoText: { color: "#555", fontSize: 13 },
//   dot: { color: "#555", marginHorizontal: 8 },
//   cardDivider: { height: 1, backgroundColor: "#eee", marginTop: 12, marginBottom: 10 },
//   companyRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   companyLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
//   companyLogo: { width: 36, height: 36, marginRight: 8 },
//   companyName: { fontSize: 14, color: "#333", fontWeight: "600" },
//   verifiedIcon: { width: 16, height: 16, marginLeft: 6 },
//   companyRight: { alignItems: "flex-end" },
//   locationText: { fontSize: 13, color: "#666" },
//   timeText: { fontSize: 12, color: "#999", marginTop: 4 },
//   sheedi: { marginLeft: 48 },

//   // 🔹 Added styles for dots and categories
//   progressDotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   dotIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#c4c4c4",
//     marginHorizontal: 5,
//   },
//   activeDotIndicator: { backgroundColor: "#0C64AE" },
//   gridRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
//   categoryCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     width: "48%",
//     alignItems: "center",
//     paddingVertical: 20,
//     elevation: 2,
//   },
//   categoryImage: { width: 50, height: 50, marginBottom: 10 },
//   categoryText: { fontSize: 14, fontWeight: "600", color: "#000" },

//   // 🔹 Modal
//   fullscreenModal: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.6)", // dimmed background
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 9999,
//     // ensure it overlays tab bar
//   },

//   modalContainer: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     elevation: 10,
//     height: "70%",
//     paddingTop: 40
//   },

//   modalHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//   },

//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#000",
//   },

//   closeButton: {
//     fontSize: 22,
//     color: "#666",
//   },

//   modalSubtitle: {
//     fontSize: 15,
//     color: "#444",
//     textAlign: "center",
//     marginVertical: 10,
//   },

//   modalImage: {
//     width: "100%",
//     height: 150,
//     marginVertical: 10,
//   },

//   modalDescription: {
//     fontSize: 14,
//     color: "#666",
//     textAlign: "center",
//     marginBottom: 15,
//   },

//   infoBox: {
//     flexDirection: "row",
//     backgroundColor: "#f3f9fa",
//     borderRadius: 12,
//     padding: 10,
//     marginBottom: 20,
//     alignItems: "center",
//   },

//   infoIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },

//   infoText: {
//     flex: 1,
//     color: "#333",
//     fontSize: 13,
//   },

//   completeButton: {
//     backgroundColor: "#0C64AE",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//     marginBottom: 12,
//     width: "90%",
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   completeButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 15,

//   },

//   laterText: {
//     color: "#666",
//     textDecorationLine: "underline",
//     fontSize: 13,
//   },
//   modalWrapper: {
//     margin: 0,
//     justifyContent: "flex-end", // ⬅️ makes modal start from the bottom
//   },
//   newsCard: {
//   backgroundColor: "#fff",
//   borderRadius: 12,
//   overflow: "hidden",
//   elevation: 2,
//   shadowColor: "#000",
//   shadowOpacity: 0.06,
//   shadowOffset: { width: 0, height: 2 },
//   shadowRadius: 6,
//   marginBottom: 16,
// },
// newsImageWrapper: {
//   position: "relative",
// },
// newsImage: {
//   width: "100%",
//   height: 180,
//   borderTopLeftRadius: 12,
//   borderTopRightRadius: 12,
// },
// newsTopIcons: {
//   position: "absolute",
//   top: 10,
//   right: 10,
//   flexDirection: "row",
//   alignItems: "center",
// },
// starIcon: {
//   width: 20,
//   height: 20,
//   marginRight: 6,
// },
// popularIcon: {
//   width: 50,
//   height: 20,
// },
// newsTitle: {
//   fontSize: 15,
//   fontWeight: "600",
//   color: "#000",
//   paddingHorizontal: 12,
//   marginTop: 10,
// },
// newsUnderline: {
//   height: 1,
//   backgroundColor: "#eee",
//   marginVertical: 10,
//   marginHorizontal: 12,
// },
// newsBottomRow: {
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   paddingHorizontal: 12,
//   paddingBottom: 12,
// },
// bottomIcon: {
//   width: 80,
//   height: 16,
//   resizeMode: "contain",
// },
// bottomMenu: {
//   width: 20,
//   height: 20,
//   resizeMode: "contain",
// },
// featuredCard: {
//   backgroundColor: "#fff",
//   borderRadius: 12,
//   overflow: "hidden",
//   elevation: 2,
//   shadowColor: "#000",
//   shadowOpacity: 0.06,
//   shadowOffset: { width: 0, height: 2 },
//   shadowRadius: 6,
//   marginTop: 10,
// },
// featuredImage: {
//   width: "100%",
//   height: 200,
//   borderRadius: 12,
// },



// });


//it is working fine for the both job and news updated button 
//for the menu button use below code 


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Switch,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";
// import Modal from "react-native-modal";

// const HomeScreen = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState("Jobs");
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isOptionsModalVisible, setOptionsModalVisible] = useState(false); // ✅ new modal
//   const [isNotificationEnabled, setNotificationEnabled] = useState(false);

//   const handleTabPress = (tab) => {
//     if (tab === "News") {
//       setModalVisible(true);
//     } else {
//       setModalVisible(false);
//       setActiveTab("Jobs");
//     }
//   };

//   const isJobsActive = !isModalVisible;
//   const isNewsActive = isModalVisible;

//   return (
//     <View style={styles.screen}>
//       {/* 🔹 Top Header */}
//       <View style={styles.topHeader}>
//         <View style={styles.topRow}>
//           <View style={styles.leftRow}>
//             <Image source={require("../../assets/dp.png")} style={styles.dp} />
//             <View style={styles.welcomeWrap}>
//               <Text style={styles.welcomeSmall}>Welcome,</Text>
//               <Text style={styles.welcomeName}>Ahsan Qazi</Text>
//             </View>
//           </View>

//           <Image
//             source={require("../../assets/headericon.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//         </View>

//         <Text style={styles.headerTitle}>Find the job you deserve</Text>

//         <View style={styles.searchRow}>
//           <TextInput
//             placeholder="Search Job, Company & Role"
//             placeholderTextColor="#999"
//             style={styles.searchInput}
//             underlineColorAndroid="transparent"
//           />
//           <TouchableOpacity style={styles.searchIconWrap}>
//             <Image
//               source={require("../../assets/search.png")}
//               style={styles.searchIcon}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* 🔹 Bottom Area */}
//       <View style={styles.bottomArea}>
//         {/* Tabs */}
//         <View style={styles.segmentRow}>
//           <TouchableOpacity
//             style={[
//               styles.segmentButton,
//               isJobsActive ? styles.segmentActive : styles.segmentInactive,
//             ]}
//             onPress={() => handleTabPress("Jobs")}
//           >
//             <Text
//               style={[
//                 styles.segmentText,
//                 isJobsActive
//                   ? styles.segmentTextActive
//                   : styles.segmentTextInactive,
//               ]}
//             >
//               Jobs
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.segmentButton,
//               isNewsActive ? styles.segmentActive : styles.segmentInactive,
//             ]}
//             onPress={() => handleTabPress("News")}
//           >
//             <Text
//               style={[
//                 styles.segmentText,
//                 isNewsActive
//                   ? styles.segmentTextActive
//                   : styles.segmentTextInactive,
//               ]}
//             >
//               News Updates
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* 🔹 Content Scroll */}
//         <ScrollView
//           contentContainerStyle={styles.contentScroll}
//           showsVerticalScrollIndicator={false}
//         >
//           {activeTab === "Jobs" ? (
//             <>
//               {/* 🔹 Jobs For You */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Jobs For You</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* 🔹 Job Card */}
//               <View style={styles.jobCard}>
//                 <View style={styles.cardTopRow}>
//                   <Text style={styles.jobTitle}>Senior Python Developer</Text>
//                   <TouchableOpacity style={styles.saveBtn}>
//                     <Icon name="bookmark" size={25} color="#797c7eff" />
//                   </TouchableOpacity>
//                 </View>

//                 {/* Tags */}
//                 <View style={styles.tagsRow}>
//                   <View style={styles.tag1}>
//                     <Text style={styles.tag1Text}>Urgent</Text>
//                   </View>
//                   <View style={styles.tag}>
//                     <Text style={styles.tagText}>Full-Time</Text>
//                   </View>
//                   <View style={styles.tag}>
//                     <Text style={styles.tagText}>Remote</Text>
//                   </View>
//                 </View>

//                 {/* Salary */}
//                 <View style={styles.salaryWrap}>
//                   <Text style={styles.salaryText}>250k - 350k</Text>
//                 </View>

//                 {/* Applicants / Positions */}
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoText}>03 Applicants</Text>
//                   <Text style={styles.dot}>•</Text>
//                   <Text style={styles.infoText}>07 Positions</Text>
//                 </View>

//                 {/* Divider */}
//                 <View style={styles.cardDivider} />

//                 {/* Company Info */}
//                 <View style={styles.companyRow}>
//                   <View style={styles.companyLeft}>
//                     <Image
//                       source={require("../../assets/Microsoft.png")}
//                       style={styles.companyLogo}
//                       resizeMode="contain"
//                     />
//                     <Text style={styles.companyName}>
//                       Microsoft, Hyderabad
//                     </Text>
//                     <Image
//                       source={require("../../assets/verified.png")}
//                       style={styles.verifiedIcon}
//                       resizeMode="contain"
//                     />
//                   </View>
//                   <View style={styles.companyRight}>
//                     <Text style={styles.timeText}>5 hours ago</Text>
//                   </View>
//                 </View>
//                 <View style={styles.sheedi}>
//                   <Text style={styles.locationText}>Sheedi Goth</Text>
//                 </View>
//               </View>

//               {/* 🔹 Progress Dots */}
//               <View style={styles.progressDotsContainer}>
//                 {[1, 2, 3, 4].map((dot) => (
//                   <View
//                     key={dot}
//                     style={[
//                       styles.dotIndicator,
//                       dot === 3 && styles.activeDotIndicator,
//                     ]}
//                   />
//                 ))}
//               </View>

//               {/* 🔹 Job by Categories */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Job by Categories</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Grid Cards */}
//               <View style={styles.gridRow}>
//                 <View style={styles.categoryCard}>
//                   <Image
//                     source={require("../../assets/developement.png")}
//                     style={styles.categoryImage}
//                     resizeMode="contain"
//                   />
//                   <Text style={styles.categoryText}>Development</Text>
//                 </View>
//                 <View style={styles.categoryCard}>
//                   <Image
//                     source={require("../../assets/design.png")}
//                     style={styles.categoryImage}
//                     resizeMode="contain"
//                   />
//                   <Text style={styles.categoryText}>Design</Text>
//                 </View>
//               </View>
//             </>
//           ) : (
//             <>
//               {/* 🔹 News Updates */}
//               <View style={styles.rowTitle}>
//                 <Text style={styles.jobsTitle}>Curated For You</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.viewAll}>View All &gt;</Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.newsCard}>
//                 <View style={styles.newsImageWrapper}>
//                   <Image
//                     source={require("../../assets/news.png")}
//                     style={styles.newsImage}
//                     resizeMode="contain"
//                   />
//                   {/* <View style={styles.newsTopIcons}>
//                     <Image
//                       source={require("../../assets/star.png")}
//                       style={styles.starIcon}
//                       resizeMode="contain"
//                     />
//                     <Image
//                       source={require("../../assets/popular.png")}
//                       style={styles.popularIcon}
//                       resizeMode="contain"
//                     />
//                   </View> */}
//                 </View>

//                 <Text style={styles.newsTitle}>
//                   Bazaar Raises $70 Million in Series B to Digitize Pakistan's
//                   Digital Retail
//                 </Text>

//                 <View style={styles.newsUnderline} />

//                 <View style={styles.newsBottomRow}>
//                   <Image
//                     source={require("../../assets/yesterday.png")}
//                     resizeMode="contain"
//                     style={styles.bottomIcon}
//                   />
//                   <TouchableOpacity
//                     onPress={() => setOptionsModalVisible(true)} // ✅ new modal open
//                   >
//                     <Image
//                       source={require("../../assets/menu.png")

                      
//                       }
//                       resizeMode="contain"
//                       style={styles.bottomMenu}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <View style={styles.progressDotsContainer}>
//                 {[1, 2, 3, 4].map((dot) => (
//                   <View
//                     key={dot}
//                     style={[
//                       styles.dotIndicator,
//                       dot === 1 && styles.activeDotIndicator,
//                     ]}
//                   />
//                 ))}
//               </View>

//               <Text style={[styles.jobsTitle, { marginTop: 10 }]}>
//                 Top Featured
//               </Text>
//               <View style={styles.featuredCard}>
//                 <Image
//                   source={require("../../assets/featured.png")}
//                   style={styles.featuredImage}
//                   resizeMode="cover"
//                 />
//               </View>
//             </>
//           )}
//         </ScrollView>
//       </View>

//       {/* 🔹 Main Modal */}
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={() => setModalVisible(false)}
//         onBackButtonPress={() => setModalVisible(false)}
//         swipeDirection={["down", "up"]}
//         propagateSwipe={true}
//         style={styles.modalWrapper}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>
//               Ahsan, Let's customize your feeds
//             </Text>
//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButton}>✕</Text>
//             </TouchableOpacity>
//           </View>

//           <Image
//             source={require("../../assets/homemodal.png")}
//             style={styles.modalImage}
//             resizeMode="contain"
//           />

//           <Text style={styles.modalDescription}>
//             Follow your favourite companies and be the first one to receive News
//             updated, Job Alerts and announcement notifications at instance
//           </Text>

//           <View style={styles.infoBox}>
//             <Image
//               source={require("../../assets/bulf.png")}
//               style={styles.infoIcon}
//             />
//             <Text style={styles.infoText}>
//               Make sure your notifications are enabled in application settings
//               and phone settings as well
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.completeButton}
//             onPress={() => {
//               setModalVisible(false);
//               setActiveTab("News");
//             }}
//           >
//             <Text style={styles.completeButtonText}>Continue</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Text style={styles.laterText}>Not now, remind me later.</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       {/* 🔹 More Options Modal */}
//       <Modal
//         isVisible={isOptionsModalVisible}
//         onBackdropPress={() => setOptionsModalVisible(false)}
//         onBackButtonPress={() => setOptionsModalVisible(false)}
//         style={styles.modalWrapper}
//       >
//         <View style={styles.optionsModal}>
//           <View style={styles.optionsHeader}>
//             <Text style={styles.optionsTitle}>More Options</Text>
//             <TouchableOpacity onPress={() => setOptionsModalVisible(false)}>
//               <Text style={styles.closeButton}>✕</Text>
//             </TouchableOpacity>
//           </View>

//           {[
//             { icon: "plus", text: "Follow (Company Name)" },
//             { icon: "bell", text: "Notifications", toggle: true },
//             { icon: "minus", text: "Not Interested" },
//             { icon: "alert-circle", text: "Why am I seeing this?" },
            
//             { icon: "x", text: "Report" },
//           ].map((item, i) => (
//             <View key={i}>
//               <View style={styles.optionRow}>
//                 <View style={styles.iconCircle}>
//                   <Icon name={item.icon} size={18} color="#000" />
//                 </View>
//                 <Text style={styles.optionText}>{item.text}</Text>
//                 {item.toggle && (
//                   <Switch
//                     value={isNotificationEnabled}
//                     onValueChange={setNotificationEnabled}
//                     thumbColor={isNotificationEnabled ? "#0C64AE" : "#ccc"}
//                     trackColor={{ true: "#BBD8F2", false: "#ddd" }}
//                   />
//                 )}
//               </View>
//               {i !== 4 && <View style={styles.dividerLine} />}
//             </View>
//           ))}
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: "#fff" },
//   topHeader: {
//     backgroundColor: "#E8F0F7",
//     paddingHorizontal: 18,
//     paddingTop: 18,
//     paddingBottom: 18,
//     marginTop: 60,
//     height: 230,
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   leftRow: { flexDirection: "row", alignItems: "center" },
//   dp: { width: 48, height: 48, borderRadius: 24 },
//   welcomeWrap: { marginLeft: 12 },
//   welcomeSmall: { fontSize: 13, color: "#333" },
//   welcomeName: { fontSize: 16, fontWeight: "400", color: "#000" },
//   logo: { width: 110, height: 35 },
//   headerTitle: { marginTop: 14, fontSize: 20, fontWeight: "400", color: "#000" },
//   searchRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f3f9faff",
//     borderRadius: 10,
//     height: 46,
//     borderWidth: 1,
//     borderColor: "#fff",
//     overflow: "hidden",
//   },
//   searchInput: { flex: 1, paddingHorizontal: 12, fontSize: 15, color: "#000" },
//   searchIconWrap: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center" },
//   searchIcon: { width: 20, height: 20, tintColor: "#333" },
//   bottomArea: { flex: 1, backgroundColor: "#f3f9faff", paddingHorizontal: 18, paddingTop: 16 },
//   segmentRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
//   segmentButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     borderRadius: 25,
//     marginHorizontal: 4,
//     borderWidth: 1.5,
//     borderColor: "#0C64AE",
//   },
//   segmentActive: { backgroundColor: "#0C64AE" },
//   segmentInactive: { backgroundColor: "#FFFFFF" },
//   segmentText: { fontSize: 16, fontWeight: "400" },
//   segmentTextActive: { color: "#fff" },
//   segmentTextInactive: { color: "#0C64AE" },
//   contentScroll: { paddingBottom: 20 },
//   rowTitle: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     paddingTop: 6,
//   },
//   jobsTitle: { fontSize: 18, fontWeight: "700", color: "#000" },
//   viewAll: { color: "#75787aff", fontWeight: "600" },
//   jobCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 14,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     marginBottom: 14,
//     height: 250,
//   },
//   cardTopRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   jobTitle: { fontSize: 16, fontWeight: "700", color: "#000", flex: 1, marginRight: 8 },
//   saveBtn: { padding: 6, borderRadius: 8 },
//   tagsRow: { flexDirection: "row", marginTop: 10 },
//   tag1: {
//     backgroundColor: "#F9DEDC",
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 6,
//     marginRight: 8,
//   },
//   tag: {
//     backgroundColor: "#f5f7faff",
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 6,
//     marginRight: 8,
//   },
//   tag1Text: { fontSize: 12, color: "#333", fontWeight: "600" },
//   tagText: { fontSize: 12, color: "#333", fontWeight: "600" },
//   salaryWrap: { marginTop: 12 },
//   salaryText: { fontSize: 15, fontWeight: "500" },
//   infoRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
//   infoText: { color: "#555", fontSize: 13 },
//   dot: { color: "#555", marginHorizontal: 8 },
//   cardDivider: { height: 1, backgroundColor: "#eee", marginTop: 12, marginBottom: 10 },
//   companyRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   companyLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
//   companyLogo: { width: 36, height: 36, marginRight: 8 },
//   companyName: { fontSize: 14, color: "#333", fontWeight: "600" },
//   verifiedIcon: { width: 16, height: 16, marginLeft: 6 },
//   companyRight: { alignItems: "flex-end" },
//   locationText: { fontSize: 13, color: "#666" },
//   sheedi: { marginTop: 6 },
//   progressDotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 14,
//   },
//   dotIndicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#ccc",
//     marginHorizontal: 4,
//   },
//   activeDotIndicator: { backgroundColor: "#0C64AE" },
//   gridRow: { flexDirection: "row", justifyContent: "space-between" },
//   categoryCard: {
//     width: "48%",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     alignItems: "center",
//     paddingVertical: 20,
//     elevation: 2,
//   },
//   categoryImage: { width: 50, height: 50 },
//   categoryText: { marginTop: 8, fontWeight: "600", color: "#333" },
//   newsCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 14,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     marginBottom: 14,
//   },
//   newsImageWrapper: { position: "relative" },
//   newsImage: { width: "100%", height: 125, borderRadius: 8, },
//   newsTopIcons: {
//     position: "absolute",
//     top: 8,
//     right: 8,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   starIcon: { width: 24, height: 24, marginRight: 4 },
//   popularIcon: { width: 24, height: 24 },
//   newsTitle: {
//     marginTop: 12,
//     fontSize: 15,
//     fontWeight: "700",
//     color: "#000",
//   },
//   newsUnderline: { height: 1, backgroundColor: "#eee", marginVertical: 10 },
//   newsBottomRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   bottomIcon: { width: 100, height:100  },
//   bottomMenu: { width: 20, height: 20 },

//   // ✅ Updated Modal styles
//   modalWrapper: {
//     margin: 0,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   modalContainer: {
//     width: "100%",
//     height: "85%",
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingHorizontal: 20,
//     paddingTop: 35,
//     paddingBottom: 30,
//     alignItems: "center",
//     elevation: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: -3 },
//     shadowRadius: 8,
//   },
//   modalHeader: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   modalTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
//   closeButton: { fontSize: 20, color: "#000" },
//   modalImage: { width: 220, height: 180, marginVertical: 15 },
//   modalDescription: { textAlign: "center", fontSize: 14, color: "#555", lineHeight: 22 },
//   infoBox: {
//     backgroundColor: "#E8F0F7",
//     borderRadius: 10,
//     padding: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 15,
//   },
//   infoIcon: { width: 24, height: 24, marginRight: 8 },
//   infoText: { flex: 1, fontSize: 13, color: "#333" },
//   completeButton: {
//     backgroundColor: "#0C64AE",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   completeButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
//   laterText: { color: "#777", fontSize: 13, marginTop: 10 },

//   // ✅ More Options Modal styles
//   optionsModal: {
//     width: "100%",
//     height: "65%",
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingHorizontal: 20,
//     paddingTop: 30,
//   },
//   optionsHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   optionsTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
//   optionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 14,
//   },
//   iconCircle: {
//     width: 34,
//     height: 34,
//     borderRadius: 17,
//     backgroundColor: "#E8F0F7",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   optionText: { flex: 1, fontSize: 15, color: "#000" },
//   dividerLine: { height: 1, backgroundColor: "#eee" },
// });



import React, { useState } from "react"; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Jobs");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOptionsModalVisible, setOptionsModalVisible] = useState(false); // ✅ new modal
  const [isReportModalVisible, setReportModalVisible] = useState(false); // ✅ report modal
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);

  const handleTabPress = (tab) => {
    if (tab === "News") {
      setModalVisible(true);
    } else {
      setModalVisible(false);
      setActiveTab("Jobs");
    }
  };

  const isJobsActive = !isModalVisible;
  const isNewsActive = isModalVisible;

  return (
    <View style={styles.screen}>
      {/* 🔹 Top Header */}
      <View style={styles.topHeader}>
        <View style={styles.topRow}>
          <View style={styles.leftRow}>
            <Image source={require("../../assets/dp.png")} style={styles.dp} />
            <View style={styles.welcomeWrap}>
              <Text style={styles.welcomeSmall}>Welcome,</Text>
              <Text style={styles.welcomeName}>Ahsan Qazi</Text>
            </View>
          </View>

          <Image
            source={require("../../assets/headericon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.headerTitle}>Find the job you deserve</Text>

        <View style={styles.searchRow}>
          <TextInput
            placeholder="Search Job, Company & Role"
            placeholderTextColor="#999"
            style={styles.searchInput}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.searchIconWrap}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.searchIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Bottom Area */}
      <View style={styles.bottomArea}>
        {/* Tabs */}
        <View style={styles.segmentRow}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              isJobsActive ? styles.segmentActive : styles.segmentInactive,
            ]}
            onPress={() => handleTabPress("Jobs")}
          >
            <Text
              style={[
                styles.segmentText,
                isJobsActive
                  ? styles.segmentTextActive
                  : styles.segmentTextInactive,
              ]}
            >
              Jobs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentButton,
              isNewsActive ? styles.segmentActive : styles.segmentInactive,
            ]}
            onPress={() => handleTabPress("News")}
          >
            <Text
              style={[
                styles.segmentText,
                isNewsActive
                  ? styles.segmentTextActive
                  : styles.segmentTextInactive,
              ]}
            >
              News Updates
            </Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Content Scroll */}
        <ScrollView
          contentContainerStyle={styles.contentScroll}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "Jobs" ? (
            <>
              {/* 🔹 Jobs For You */}
              <View style={styles.rowTitle}>
                <Text style={styles.jobsTitle}>Jobs For You</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All &gt;</Text>
                </TouchableOpacity>
              </View>

              {/* 🔹 Job Card */}
              <View style={styles.jobCard}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.jobTitle}>Senior Python Developer</Text>
                  <TouchableOpacity style={styles.saveBtn}>
                    <Icon name="bookmark" size={25} color="#797c7eff" />
                  </TouchableOpacity>
                </View>

                {/* Tags */}
                <View style={styles.tagsRow}>
                  <View style={styles.tag1}>
                    <Text style={styles.tag1Text}>Urgent</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Full-Time</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Remote</Text>
                  </View>
                </View>

                {/* Salary */}
                <View style={styles.salaryWrap}>
                  <Text style={styles.salaryText}>250k - 350k</Text>
                </View>

                {/* Applicants / Positions */}
                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>03 Applicants</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.infoText}>07 Positions</Text>
                </View>

                {/* Divider */}
                <View style={styles.cardDivider} />

                {/* Company Info */}
                <View style={styles.companyRow}>
                  <View style={styles.companyLeft}>
                    <Image
                      source={require("../../assets/Microsoft.png")}
                      style={styles.companyLogo}
                      resizeMode="contain"
                    />
                    <Text style={styles.companyName}>
                      Microsoft, Hyderabad
                    </Text>
                    <Image
                      source={require("../../assets/verified.png")}
                      style={styles.verifiedIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.companyRight}>
                    <Text style={styles.timeText}>5 hours ago</Text>
                  </View>
                </View>
                <View style={styles.sheedi}>
                  <Text style={styles.locationText}>Sheedi Goth</Text>
                </View>
              </View>

              {/* 🔹 Progress Dots */}
              <View style={styles.progressDotsContainer}>
                {[1, 2, 3, 4].map((dot) => (
                  <View
                    key={dot}
                    style={[
                      styles.dotIndicator,
                      dot === 3 && styles.activeDotIndicator,
                    ]}
                  />
                ))}
              </View>

              {/* 🔹 Job by Categories */}
              <View style={styles.rowTitle}>
                <Text style={styles.jobsTitle}>Job by Categories</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All &gt;</Text>
                </TouchableOpacity>
              </View>

              {/* Grid Cards */}
              <View style={styles.gridRow}>
                <View style={styles.categoryCard}>
                  <Image
                    source={require("../../assets/developement.png")}
                    style={styles.categoryImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryText}>Development</Text>
                </View>
                <View style={styles.categoryCard}>
                  <Image
                    source={require("../../assets/design.png")}
                    style={styles.categoryImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryText}>Design</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              {/* 🔹 News Updates */}
              <View style={styles.rowTitle}>
                <Text style={styles.jobsTitle}>Curated For You</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All &gt;</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.newsCard}>
                <View style={styles.newsImageWrapper}>
                  <Image
                    source={require("../../assets/news.png")}
                    style={styles.newsImage}
                    resizeMode="contain"
                  />
                  {/* <View style={styles.newsTopIcons}>
                    <Image
                      source={require("../../assets/star.png")}
                      style={styles.starIcon}
                      resizeMode="contain"
                    />
                    <Image
                      source={require("../../assets/popular.png")}
                      style={styles.popularIcon}
                      resizeMode="contain"
                    />
                  </View> */}
                </View>

                <Text style={styles.newsTitle}>
                  Bazaar Raises $70 Million in Series B to Digitize Pakistan's
                  Digital Retail
                </Text>

                <View style={styles.newsUnderline} />

                <View style={styles.newsBottomRow}>
                  <Image
                    source={require("../../assets/yesterday.png")}
                    resizeMode="contain"
                    style={styles.bottomIcon}
                  />
                  <TouchableOpacity
                    onPress={() => setOptionsModalVisible(true)} // ✅ new modal open
                  >
                    <Image
                      source={require("../../assets/menu.png")}
                      resizeMode="contain"
                      style={styles.bottomMenu}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.progressDotsContainer}>
                {[1, 2, 3, 4].map((dot) => (
                  <View
                    key={dot}
                    style={[
                      styles.dotIndicator,
                      dot === 1 && styles.activeDotIndicator,
                    ]}
                  />
                ))}
              </View>

              <Text style={[styles.jobsTitle, { marginTop: 10 }]}>
                Top Featured
              </Text>
              <View style={styles.featuredCard}>
                <Image
                  source={require("../../assets/featured.png")}
                  style={styles.featuredImage}
                  resizeMode="cover"
                />
              </View>
            </>
          )}
        </ScrollView>
      </View>

      {/* 🔹 Main Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        swipeDirection={["down", "up"]}
        propagateSwipe={true}
        style={styles.modalWrapper}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              Ahsan, Let's customize your feeds
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/homemodal.png")}
            style={styles.modalImage}
            resizeMode="contain"
          />

          <Text style={styles.modalDescription}>
            Follow your favourite companies and be the first one to receive News
            updated, Job Alerts and announcement notifications at instance
          </Text>

          <View style={styles.infoBox}>
            <Image
              source={require("../../assets/bulf.png")}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>
              Make sure your notifications are enabled in application settings
              and phone settings as well
            </Text>
          </View>

          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => {
              setModalVisible(false);
              setActiveTab("News");
            }}
          >
            <Text style={styles.completeButtonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.laterText}>Not now, remind me later.</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* 🔹 More Options Modal */}
      <Modal
        isVisible={isOptionsModalVisible}
        onBackdropPress={() => setOptionsModalVisible(false)}
        onBackButtonPress={() => setOptionsModalVisible(false)}
        style={styles.modalWrapper}
      >
        <View style={styles.optionsModal}>
          <View style={styles.optionsHeader}>
            <Text style={styles.optionsTitle}>More Options</Text>
            <TouchableOpacity onPress={() => setOptionsModalVisible(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          {[
            { icon: "plus", text: "Follow (Company Name)" },
            { icon: "bell", text: "Notifications", toggle: true },
            { icon: "minus", text: "Not Interested" },
            { icon: "alert-circle", text: "Why am I seeing this?" },
            { icon: "x", text: "Report" },
          ].map((item, i) => (
            <View key={i}>
              {item.text === "Report" ? (
                // ✅ Report is now pressable and opens the report modal
                <TouchableOpacity
                  onPress={() => {
                    setOptionsModalVisible(false);
                    setReportModalVisible(true);
                  }}
                >
                  <View style={styles.optionRow}>
                    <View style={styles.iconCircle}>
                      <Icon name={item.icon} size={18} color="#000" />
                    </View>
                    <Text style={styles.optionText}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.optionRow}>
                  <View style={styles.iconCircle}>
                    <Icon name={item.icon} size={18} color="#000" />
                  </View>
                  <Text style={styles.optionText}>{item.text}</Text>
                  {item.toggle && (
                    <Switch
                      value={isNotificationEnabled}
                      onValueChange={setNotificationEnabled}
                      thumbColor={isNotificationEnabled ? "#0C64AE" : "#ccc"}
                      trackColor={{ true: "#BBD8F2", false: "#ddd" }}
                    />
                  )}
                </View>
              )}

              {i !== 4 && <View style={styles.dividerLine} />}
            </View>
          ))}
        </View>
      </Modal>

      {/* 🔹 Report Modal (new) */}
      <Modal
        isVisible={isReportModalVisible}
        onBackdropPress={() => setReportModalVisible(false)}
        onBackButtonPress={() => setReportModalVisible(false)}
        style={styles.modalWrapper}
      >
        <View style={styles.reportModal}>
          <View style={styles.reportHeader}>
            <Text style={styles.reportTitle}>Report</Text>
            <TouchableOpacity onPress={() => setReportModalVisible(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Row: X and Inappropriate Content */}
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
              <Icon name="x" size={18} color="#000" />
            </View>
            <Text style={styles.reportText}>Inappropriate Content</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerLine} />

          {/* Row: X and Misleading / Incorrect Information */}
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
              <Icon name="x" size={18} color="#000" />
            </View>
            <Text style={styles.reportText}>Misleading / Incorrect Information</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerLine} />

          {/* Row: X and Irrelavant to me */}
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
              <Icon name="x" size={18} color="#000" />
            </View>
            <Text style={styles.reportText}>Irrelavant to me</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  topHeader: {
    backgroundColor: "#E8F0F7",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 18,
    marginTop: 60,
    height: 230,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  dp: { width: 48, height: 48, borderRadius: 24 },
  welcomeWrap: { marginLeft: 12 },
  welcomeSmall: { fontSize: 13, color: "#333" },
  welcomeName: { fontSize: 16, fontWeight: "400", color: "#000" },
  logo: { width: 110, height: 35 },
  headerTitle: { marginTop: 14, fontSize: 20, fontWeight: "400", color: "#000" },
  searchRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f9faff",
    borderRadius: 10,
    height: 46,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden",
  },
  searchInput: { flex: 1, paddingHorizontal: 12, fontSize: 15, color: "#000" },
  searchIconWrap: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center" },
  searchIcon: { width: 20, height: 20, tintColor: "#333" },
  bottomArea: { flex: 1, backgroundColor: "#f3f9faff", paddingHorizontal: 18, paddingTop: 16 },
  segmentRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 4,
    borderWidth: 1.5,
    borderColor: "#0C64AE",
  },
  segmentActive: { backgroundColor: "#0C64AE" },
  segmentInactive: { backgroundColor: "#FFFFFF" },
  segmentText: { fontSize: 16, fontWeight: "400" },
  segmentTextActive: { color: "#fff" },
  segmentTextInactive: { color: "#0C64AE" },
  contentScroll: { paddingBottom: 20 },
  rowTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingTop: 6,
  },
  jobsTitle: { fontSize: 18, fontWeight: "700", color: "#000" },
  viewAll: { color: "#75787aff", fontWeight: "600" },
  jobCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginBottom: 14,
    height: 250,
  },
  cardTopRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  jobTitle: { fontSize: 16, fontWeight: "700", color: "#000", flex: 1, marginRight: 8 },
  saveBtn: { padding: 6, borderRadius: 8 },
  tagsRow: { flexDirection: "row", marginTop: 10 },
  tag1: {
    backgroundColor: "#F9DEDC",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  tag: {
    backgroundColor: "#f5f7faff",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  tag1Text: { fontSize: 12, color: "#333", fontWeight: "600" },
  tagText: { fontSize: 12, color: "#333", fontWeight: "600" },
  salaryWrap: { marginTop: 12 },
  salaryText: { fontSize: 15, fontWeight: "500" },
  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  infoText: { color: "#555", fontSize: 13 },
  dot: { color: "#555", marginHorizontal: 8 },
  cardDivider: { height: 1, backgroundColor: "#eee", marginTop: 12, marginBottom: 10 },
  companyRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  companyLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  companyLogo: { width: 36, height: 36, marginRight: 8 },
  companyName: { fontSize: 14, color: "#333", fontWeight: "600" },
  verifiedIcon: { width: 16, height: 16, marginLeft: 6 },
  companyRight: { alignItems: "flex-end" },
  locationText: { fontSize: 13, color: "#666" },
  sheedi: { marginTop: 6 },
  progressDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 14,
  },
  dotIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDotIndicator: { backgroundColor: "#0C64AE" },
  gridRow: { flexDirection: "row", justifyContent: "space-between" },
  categoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 20,
    elevation: 2,
  },
  categoryImage: { width: 50, height: 50 },
  categoryText: { marginTop: 8, fontWeight: "600", color: "#333" },
  newsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginBottom: 14,
  },
  newsImageWrapper: { position: "relative" },
  newsImage: { width: "100%", height: 125, borderRadius: 8, },
  newsTopIcons: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: { width: 24, height: 24, marginRight: 4 },
  popularIcon: { width: 24, height: 24 },
  newsTitle: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
  },
  newsUnderline: { height: 1, backgroundColor: "#eee", marginVertical: 10 },
  newsBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomIcon: { width: 100, height:100  },
  bottomMenu: { width: 20, height: 20 },

  // ✅ Updated Modal styles
  modalWrapper: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 30,
    alignItems: "center",
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
  closeButton: { fontSize: 20, color: "#000" },
  modalImage: { width: 220, height: 180, marginVertical: 15 },
  modalDescription: { textAlign: "center", fontSize: 14, color: "#555", lineHeight: 22 },
  infoBox: {
    backgroundColor: "#E8F0F7",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  infoIcon: { width: 24, height: 24, marginRight: 8 },
  infoText: { flex: 1, fontSize: 13, color: "#333" },
  completeButton: {
    backgroundColor: "#0C64AE",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  completeButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  laterText: { color: "#777", fontSize: 13, marginTop: 10 },

  // ✅ More Options Modal styles
  optionsModal: {
    width: "100%",
    height: "65%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  optionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  optionsTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8F0F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  optionText: { flex: 1, fontSize: 15, color: "#000" },
  dividerLine: { height: 1, backgroundColor: "#eee" },

  // ✅ Report modal styles
  reportModal: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },
  reportHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  reportTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
  reportRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  reportIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8F0F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  reportText: { fontSize: 15, color: "#000", flex: 1 },
});
