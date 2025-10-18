// import React, { useState, useRef } from 'react';
// import {
//   StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,
//   Animated, ScrollView
// } from 'react-native';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const CompanyDetailsScreen = () => {
//   const [activeTab, setActiveTab] = useState('Open Jobs');
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [50, 120],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });

//   const isJobsTab = (activeTab === 'Open Jobs');
//   const visibleHeaderOpacity = isJobsTab ? headerOpacity : 1;

//   // content tabs fade out as header fades in (only used for Jobs tab)
//   const contentTabsOpacity = scrollY.interpolate({
//     inputRange: [40, 120],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });

//   // job data for each card (first card = original; next two customized)
//   const jobData = [
//     {
//       title: 'Software Development Manager',
//       tags: [
//         { type: 'ion', icon: 'time-outline', text: 'Full-Time' },
//         { type: 'mc', icon: 'home-battery-outline', text: 'Remote' },
//         { type: 'fa', icon: 'money', text: '250k-350k' },
//       ],
//       applicants: '03 Applicants',
//       positions: '07 Positions',
//       match: '93% Matches you',
//       posted: 'Posted 15 Minutes ago',
//     },
//     {
//       title: 'User Experienced Designer',
//       tags: [
//         { type: 'text', text: 'Urgent', variant: 'red' },
//         { type: 'ion', icon: 'time-outline', text: 'Full-time' },
//         { type: 'entypo', icon: 'location', text: 'Onsite' },
//       ],
//       applicants: '32 Applicants',
//       positions: '02 Positions',
//       match: '82% Matches you',
//       posted: 'Posted 2 Days ago',
//     },
//     {
//       title: 'Ethical Hacker',
//       tags: [
//         { type: 'text', text: 'Urgent', variant: 'red' },
//         { type: 'ion', icon: 'time-outline', text: 'Full-time' },
//         { type: 'entypo', icon: 'location', text: 'Onsite' },
//       ],
//       applicants: '15 Applicants',
//       positions: '01 Positions',
//       match: '86% Matches you',
//       posted: 'Posted 2 Hours ago',
//     },
//   ];

//   // approximate height of header2 (adjust if you change header2 styles later)
//   const HEADER2_HEIGHT = 140; // px — used to push content below header2 when visible

//   return (
//     <View style={styles.container}>
//       {/* White header (fades in on Jobs scroll) */}
//       <Animated.View style={[styles.header2, { opacity: visibleHeaderOpacity }]}>
//         <View style={styles.header2Row1}>
//           <Image source={require('../../assets/leftarrownew.png')} style={styles.header2LeftIcon} />
//           <Image source={require('../../assets/logo.png')} style={styles.header2Logo} />
//           <View>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Text style={styles.header2Title}>HireSide</Text>
//               <AntDesign name="checkcircle" size={16} style={styles.verifiedIcon} />
//             </View>
//             <Text style={styles.header2Subtitle}>Software Development Company</Text>
//           </View>
//         </View>

//         {/* Compact tabs inside header */}
//         <Animated.View style={[styles.headerTabsContainer, { opacity: visibleHeaderOpacity }]}>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 6 }}>
//             {['Open Jobs', 'Overview', 'Reviews', 'People', 'Gallery'].map(tab => (
//               <TouchableOpacity
//                 key={tab}
//                 style={[styles.tabItemCompact, activeTab === tab && styles.activeTabItemCompact]}
//                 onPress={() => setActiveTab(tab)}
//               >
//                 <Text style={[styles.tabTextCompact, activeTab === tab && styles.activeTabTextCompact]}>
//                   {tab}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </Animated.View>
//       </Animated.View>

//       {/* Main scrollable content */}
//       <Animated.ScrollView
//         // Use larger top padding when header2 is visible (non-Jobs tabs), otherwise keep current Jobs spacing
//         contentContainerStyle={{ paddingTop: isJobsTab ? 70 : HEADER2_HEIGHT }}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       >
//         {isJobsTab && (
//           <ImageBackground source={require('../../assets/bg.png')} style={styles.headerBg} resizeMode="cover">
//             <Image source={require('../../assets/leftarrow.png')} style={styles.leftIcon} />
//             <View style={styles.logoContainer}>
//               <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
//             </View>
//           </ImageBackground>
//         )}

//         <View style={styles.content}>
//           {isJobsTab && (
//             <View style={styles.companyBlock}>
//               <View style={styles.companyRow}>
//                 <Text style={styles.companyName}>HireSide</Text>
//                 <AntDesign name="checkcircle" size={16} style={styles.verifiedIcon} />
//               </View>
//               <Text style={styles.companySubtitle}>Software Development Company</Text>

//               <View style={styles.infoRow}>
//                 <EvilIcons name="location" size={18} />
//                 <Text style={styles.infoText}>Karachi, Sindh Pakistan</Text>
//                 <Entypo name="dot-single" size={18} style={styles.dotIcon} />
//                 <AntDesign name="link" size={14} style={styles.linkIcon} />
//                 <Text style={styles.infoText}>www.hireside.com</Text>
//               </View>

//               <View style={styles.statsRow}>
//                 <View style={styles.statCol}>
//                   <Text style={styles.statNumber}>13+</Text>
//                   <Text style={styles.statLabel}>Open Jobs</Text>
//                 </View>
//                 <View style={styles.statCol}>
//                   <Text style={styles.statNumber}>2.7k</Text>
//                   <Text style={styles.statLabel}>Followers</Text>
//                 </View>
//                 <View style={styles.statCol}>
//                   <Text style={styles.statNumber}>4.5+</Text>
//                   <Text style={styles.statLabel}>Ratings</Text>
//                 </View>
//               </View>

//               <TouchableOpacity style={styles.followButton}>
//                 <AntDesign name="plus" size={16} color="#fff" style={{ marginRight: 8 }} />
//                 <Text style={styles.followButtonText}>Follow</Text>
//               </TouchableOpacity>
//             </View>
//           )}

//           {/* CONTENT TABS: render only for Jobs tab */}
//           {isJobsTab && (
//             <Animated.View style={{ opacity: contentTabsOpacity }}>
//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.tabBar}
//                 contentContainerStyle={{ paddingHorizontal: 6 }}
//               >
//                 {['Open Jobs', 'Overview', 'Reviews', 'People', 'Gallery'].map(tab => (
//                   <TouchableOpacity
//                     key={tab}
//                     style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}
//                     onPress={() => setActiveTab(tab)}
//                   >
//                     <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
//                       {tab}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </Animated.View>
//           )}

//           {/* === Open Jobs content: job cards === */}
//           {activeTab === 'Open Jobs' && (
//             <View>
//               <Text style={styles.sectionTitle}>Open Jobs</Text>
//               <Text style={styles.text}>List of open jobs will appear here.</Text>

//               <View style={{ marginTop: 16 }}>
//                 {jobData.map((job, idx) => (
//                   <View key={idx} style={styles.jobCard}>
//                     {/* Top row: title + save image */}
//                     <View style={styles.jobTitleRow}>
//                       <Text style={styles.jobTitle}>{job.title}</Text>
//                       <TouchableOpacity style={styles.saveBtn}>
//                         <Image source={require('../../assets/save.png')} style={styles.saveAsset} />
//                       </TouchableOpacity>
//                     </View>

//                     {/* Tag boxes row (render per job.tags) */}
//                     <View style={styles.tagRow}>
//                       {job.tags.map((t, ti) => {
//                         if (t.type === 'text') {
//                           // Urgent style (red dim)
//                           return (
//                             <View
//                               key={ti}
//                               style={[styles.tagBox, styles.tagBoxRed, ti > 0 ? { marginLeft: 10 } : null]}
//                             >
//                               <Text style={[styles.tagText, styles.tagTextRed]}>{t.text}</Text>
//                             </View>
//                           );
//                         }

//                         // icon-based tags
//                         return (
//                           <View key={ti} style={[styles.tagBox, ti > 0 ? { marginLeft: 10 } : null]}>
//                             {t.type === 'ion' && <Ionicons name={t.icon} size={18} style={styles.tagIcon} />}
//                             {t.type === 'mc' && <MaterialCommunityIcons name={t.icon} size={18} style={styles.tagIcon} />}
//                             {t.type === 'fa' && <FontAwesome name={t.icon} size={18} style={styles.tagIcon} />}
//                             {t.type === 'entypo' && <Entypo name={t.icon} size={18} style={styles.tagIcon} />}
//                             <Text style={styles.tagText}>{t.text}</Text>
//                           </View>
//                         );
//                       })}
//                     </View>

//                     {/* meta row */}
//                     <View style={styles.metaRow}>
//                       <Text style={styles.metaTextGreen}>{job.applicants}</Text>
//                       <Entypo name="dot-single" size={18} style={styles.metaDot} />
//                       <Text style={styles.metaText}>{job.positions}</Text>
//                       <Entypo name="dot-single" size={18} style={styles.metaDot} />
//                       <Text style={styles.metaTextGreen}>{job.match}</Text>
//                     </View>

//                     {/* separator */}
//                     <View style={styles.separator} />

//                     {/* footer row: company and view details */}
//                     <View style={styles.cardFooter}>
//                       <Text style={styles.companyFooterText}>HireSide</Text>
//                       <TouchableOpacity style={styles.viewButton}>
//                         <Text style={styles.viewButtonText}>View Details</Text>
//                       </TouchableOpacity>
//                     </View>

//                     {/* posted time below footer */}
//                     <Text style={styles.postedText}>{job.posted}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           )}

//           {/* Overview */}
//           {activeTab === 'Overview' && (
//             <View>
//               <Text style={styles.sectionTitle}>About</Text>

//               {/* Main overview card */}
//               <View style={styles.overviewCard}>
//                 <Text style={styles.cardHeading}>Slogan</Text>
//                 <Text style={styles.cardSubtitle}>Find the job you deserve</Text>

//                 <Text style={[styles.cardHeading, { marginTop: 12 }]}>Our Mission & Values</Text>
//                 <Text style={styles.cardSubtitle}>
//                   Hireside is cloud based software developed by Verge.Inc. It is a revolutionary platform that seamlessly connects talented individuals with dynamic companies. HireSide helps
//                 </Text>

//                 <TouchableOpacity activeOpacity={0.7}>
//                   <Text style={styles.readMore}>Read More</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Two small cards in a row */}
//               <View style={{ flexDirection: 'row', marginTop: 12 }}>
//                 <View style={styles.smallCard}>
//                   <View style={styles.smallCardRow}>
//                     <Image source={require('../../assets/group.png')} style={styles.smallIcon} />
//                     <Text style={styles.smallCardTopText}>1001-2501</Text>
//                   </View>
//                   <Text style={styles.smallCardLabel}>Company Size</Text>
//                 </View>

//                 <View style={[styles.smallCard, { marginLeft: 12 }]}>
//                   <View style={styles.smallCardRow}>
//                     <Image source={require('../../assets/location.png')} style={styles.smallIcon} />
//                     <Text style={styles.smallCardTopText}>UAE</Text>
//                   </View>
//                   <Text style={styles.smallCardLabel}>Headquarters</Text>
//                 </View>
//               </View>

//               {/* Industry card */}
//               <View style={styles.overviewCard2}>
//                 <View style={styles.smallCardRow}>
//                   <Image source={require('../../assets/building.png')} style={styles.smallIcon} />
//                   <Text style={[styles.smallCardTopText, { flex: 1 }]}>IT Services and IT Consulting</Text>
//                 </View>
//                 <Text style={styles.smallCardLabel}>Industry</Text>
//               </View>

//               {/* Growth labels */}
//               <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Growth over time</Text>
//               <Text style={styles.employessText}>Number of Employees</Text>
//             </View>
//           )}

//           {/* Reviews */}
//           {activeTab === 'Reviews' && (
//             <View>
//               <Text style={styles.sectionTitle}>Reviews</Text>
//               <Text style={styles.text}>User reviews will be shown here.</Text>
//             </View>
//           )}

//           {/* People */}
//           {activeTab === 'People' && (
//             <View>
//               <Text style={styles.sectionTitle}>People</Text>
//               <Text style={styles.text}>People associated with the company.</Text>
//             </View>
//           )}

//           {/* Gallery */}
//           {activeTab === 'Gallery' && (
//             <View>
//               <Text style={styles.sectionTitle}>Gallery</Text>
//               <Text style={styles.text}>Company gallery images here.</Text>
//             </View>
//           )}

//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default CompanyDetailsScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },

//   headerBg: { width: '100%', height: 180, position: 'relative', marginTop: -70 },
//   leftIcon: { position: 'absolute', top: 40, left: 20, width: 30, height: 30, resizeMode: 'contain' },
//   logoContainer: { position: 'absolute', left: 20, bottom: -30 },
//   logoImage: { width: 80, height: 80, borderRadius: 10, resizeMode: 'contain', marginBottom: 10 },

//   content: { marginTop: 40, paddingHorizontal: 20 },
//   companyBlock: { marginBottom: 14 },
//   companyRow: { flexDirection: 'row', alignItems: 'center' },
//   companyName: { fontSize: 18, fontWeight: '700', marginRight: 8 },
//   verifiedIcon: { color: '#0C64AE' },
//   companySubtitle: { marginTop: 6, fontSize: 13, color: '#666' },

//   infoRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 10 },
//   infoText: { marginRight: 10, marginLeft: 6, fontSize: 13, color: '#444' },
//   dotIcon: { marginHorizontal: 4 },
//   linkIcon: { marginLeft: 6 },

//   statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, paddingHorizontal: 6 },
//   statCol: { alignItems: 'center', width: '33%' },
//   statNumber: { fontSize: 16, fontWeight: '700' },
//   statLabel: { fontSize: 12, color: '#666', marginTop: 4 },

//   followButton: {
//     marginTop: 14,
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: 'row',
//     paddingVertical: 8,
//     paddingHorizontal: 14,
//     borderRadius: 25,
//     backgroundColor: '#0C64AE'
//   },
//   followButtonText: { color: '#fff', fontWeight: '600' },

//   title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
//   text: { fontSize: 14, color: '#555' },

//   /* header2 (adjusted) */
//   header2: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 14,
//     zIndex: 10,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#ddd'
//   },
//   header2Row1: { flexDirection: 'row', alignItems: 'center' },
//   header2LeftIcon: { width: 24, height: 24, marginRight: 10, resizeMode: 'contain' },
//   header2Logo: { width: 32, height: 32, marginRight: 10, resizeMode: 'contain' },
//   header2Title: { fontSize: 18, fontWeight: '700' },
//   header2Subtitle: { fontSize: 12, color: '#666', marginTop: 3 },

//   /* compact tabs */
//   headerTabsContainer: { marginTop: 12 },
//   tabItemCompact: { paddingVertical: 6, paddingHorizontal: 10, marginRight: 8 },
//   activeTabItemCompact: { borderBottomWidth: 2, borderBottomColor: '#007AFF' },
//   tabTextCompact: { fontSize: 13, color: '#444' },
//   activeTabTextCompact: { color: '#007AFF', fontWeight: '600' },

//   /* content tabs */
//   tabBar: { marginTop: 14, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 },
//   tabItem: { paddingVertical: 8, paddingHorizontal: 12, marginRight: 10 },
//   activeTabItem: { borderBottomWidth: 2, borderBottomColor: '#007AFF' },
//   tabText: { fontSize: 14, color: '#555' },
//   activeTabText: { color: '#007AFF', fontWeight: '600' },

//   /* job card styles */
//   jobCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 14,
//     marginBottom: 14,
//     borderWidth: 1,
//     elevation: 5,
//     borderColor: '#eee',
//   },
//   jobTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
//   jobTitle: { fontSize: 18, fontWeight: '700', flex: 1, paddingRight: 8 },
//   saveBtn: { padding: 6, alignSelf: 'flex-start', marginTop: -10 },
//   saveAsset: { width: 22, height: 22, resizeMode: 'contain' },

//   /* tag boxes */
//   tagRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
//   tagBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f4',
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   tagBoxRed: {
//     backgroundColor: '#ffecec',
//   },
//   tagIcon: { color: '#444' },
//   tagText: { fontSize: 13, color: '#444', marginLeft: 8, fontWeight: '500' },
//   tagTextRed: { color: '#d32f2f', fontWeight: '700' },

//   metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
//   metaTextGreen: { fontSize: 14, color: '#0a8a2e', fontWeight: '600' },
//   metaText: { fontSize: 14, color: '#444' },
//   metaDot: { marginHorizontal: 8, color: '#666' },

//   separator: { height: 1, backgroundColor: '#e6e6e6', marginVertical: 12 },

//   cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   companyFooterText: { fontSize: 14, fontWeight: '600' },
//   viewButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: '#0C64AE' },
//   viewButtonText: { color: '#0C64AE', fontWeight: '600' },

//   postedText: { fontSize: 12, color: '#888', marginTop: 8 },

//   /* Overview styles */
//   overviewCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 8,
//     borderWidth: 1,
//     elevation:3,
//     borderColor: '#eee',
//   },
//   overviewCard2: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 18,
//     marginTop: 12,
//     borderWidth: 1,
//     elevation:3,
//     borderColor: '#eee',
//   },
//   cardHeading: { fontSize: 16, fontWeight: '700' },
//   cardSubtitle: { fontSize: 14, marginTop: 6, lineHeight: 18 },
//   readMore: { marginTop: 8,marginLeft:130, color: '#0C64AE', textDecorationLine: 'underline', fontWeight: '600' },

//   smallCard: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     borderWidth: 1,
//     elevation:3,
//     borderColor: '#eee',
//   },
//   sectionTitle:{fontSize:16,fontWeight:"700"},
//   employessText:{fontSize:14,},
//   smallCardRow: { flexDirection: 'row', alignItems: 'center' },
//   smallIcon: { width: 26, height: 26, resizeMode: 'contain' },
//   smallCardTopText: { fontSize: 14, fontWeight: '700', marginLeft: 10 },
//   smallCardLabel: { fontSize: 12, marginTop: 8 },

//   /* dummy content (kept for other tabs) */
//   dummyBox: { padding: 14, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
//   dummyTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
//   dummyText: { fontSize: 13, color: '#555' },
// });





import React, { useState, useRef } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,
  Animated, ScrollView, Dimensions
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// new import
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const CompanyDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState('Open Jobs');
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [50, 120],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const isJobsTab = (activeTab === 'Open Jobs');
  const visibleHeaderOpacity = isJobsTab ? headerOpacity : 1;

  // content tabs fade out as header fades in (only used for Jobs tab)
  const contentTabsOpacity = scrollY.interpolate({
    inputRange: [40, 120],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  // job data for each card (first card = original; next two customized)
  const jobData = [
    {
      title: 'Software Development Manager',
      tags: [
        { type: 'ion', icon: 'time-outline', text: 'Full-Time' },
        { type: 'mc', icon: 'home-battery-outline', text: 'Remote' },
        { type: 'fa', icon: 'money', text: '250k-350k' },
      ],
      applicants: '03 Applicants',
      positions: '07 Positions',
      match: '93% Matches you',
      posted: 'Posted 15 Minutes ago',
    },
    {
      title: 'User Experienced Designer',
      tags: [
        { type: 'text', text: 'Urgent', variant: 'red' },
        { type: 'ion', icon: 'time-outline', text: 'Full-time' },
        { type: 'entypo', icon: 'location', text: 'Onsite' },
      ],
      applicants: '32 Applicants',
      positions: '02 Positions',
      match: '82% Matches you',
      posted: 'Posted 2 Days ago',
    },
    {
      title: 'Ethical Hacker',
      tags: [
        { type: 'text', text: 'Urgent', variant: 'red' },
        { type: 'ion', icon: 'time-outline', text: 'Full-time' },
        { type: 'entypo', icon: 'location', text: 'Onsite' },
      ],
      applicants: '15 Applicants',
      positions: '01 Positions',
      match: '86% Matches you',
      posted: 'Posted 2 Hours ago',
    },
  ];

  // approximate height of header2 (adjust if you change header2 styles later)
  const HEADER2_HEIGHT = 140; // px — used to push content below header2 when visible

  // --- sample chart data (you can replace with real numbers) ---
  // numeric values in absolute numbers (we'll format the y-labels to show "k")
  const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [200, 500, 1100, 1200, 1800], // values (employees)
        strokeWidth: 3,
      },
    ],
  };

  // choose which data index to show tooltip for (0..n-1). Example uses index 4 -> 2024.
  const tooltipIndex = 4;

  return (
    <View style={styles.container}>
      {/* White header (fades in on Jobs scroll) */}
      <Animated.View style={[styles.header2, { opacity: visibleHeaderOpacity }]}>
        <View style={styles.header2Row1}>
          <Image source={require('../../assets/leftarrownew.png')} style={styles.header2LeftIcon} />
          <Image source={require('../../assets/logo.png')} style={styles.header2Logo} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.header2Title}>HireSide</Text>
              <AntDesign name="checkcircle" size={16} style={styles.verifiedIcon} />
            </View>
            <Text style={styles.header2Subtitle}>Software Development Company</Text>
          </View>
        </View>

        {/* Compact tabs inside header */}
        <Animated.View style={[styles.headerTabsContainer, { opacity: visibleHeaderOpacity }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 6 }}>
            {['Open Jobs', 'Overview', 'Reviews', 'People', 'Gallery'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabItemCompact, activeTab === tab && styles.activeTabItemCompact]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabTextCompact, activeTab === tab && styles.activeTabTextCompact]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </Animated.View>

      {/* Main scrollable content */}
      <Animated.ScrollView
        // Use larger top padding when header2 is visible (non-Jobs tabs), otherwise keep current Jobs spacing
        contentContainerStyle={{ paddingTop: isJobsTab ? 70 : HEADER2_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {isJobsTab && (
          <ImageBackground source={require('../../assets/bg.png')} style={styles.headerBg} resizeMode="cover">
            <Image source={require('../../assets/leftarrow.png')} style={styles.leftIcon} />
            <View style={styles.logoContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
            </View>
          </ImageBackground>
        )}

        <View style={styles.content}>
          {isJobsTab && (
            <View style={styles.companyBlock}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>HireSide</Text>
                <AntDesign name="checkcircle" size={16} style={styles.verifiedIcon} />
              </View>
              <Text style={styles.companySubtitle}>Software Development Company</Text>

              <View style={styles.infoRow}>
                <EvilIcons name="location" size={18} />
                <Text style={styles.infoText}>Karachi, Sindh Pakistan</Text>
                <Entypo name="dot-single" size={18} style={styles.dotIcon} />
                <AntDesign name="link" size={14} style={styles.linkIcon} />
                <Text style={styles.infoText}>www.hireside.com</Text>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statCol}>
                  <Text style={styles.statNumber}>13+</Text>
                  <Text style={styles.statLabel}>Open Jobs</Text>
                </View>
                <View style={styles.statCol}>
                  <Text style={styles.statNumber}>2.7k</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statCol}>
                  <Text style={styles.statNumber}>4.5+</Text>
                  <Text style={styles.statLabel}>Ratings</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.followButton}>
                <AntDesign name="plus" size={16} color="#fff" style={{ marginRight: 8 }} />
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* CONTENT TABS: render only for Jobs tab */}
          {isJobsTab && (
            <Animated.View style={{ opacity: contentTabsOpacity }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabBar}
                contentContainerStyle={{ paddingHorizontal: 6 }}
              >
                {['Open Jobs', 'Overview', 'Reviews', 'People', 'Gallery'].map(tab => (
                  <TouchableOpacity
                    key={tab}
                    style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Animated.View>
          )}

          {/* === Open Jobs content: job cards === */}
          {activeTab === 'Open Jobs' && (
            <View>
              <Text style={styles.sectionTitle}>Open Jobs</Text>
              <Text style={styles.text}>List of open jobs will appear here.</Text>

              <View style={{ marginTop: 16 }}>
                {jobData.map((job, idx) => (
                  <View key={idx} style={styles.jobCard}>
                    {/* Top row: title + save image */}
                    <View style={styles.jobTitleRow}>
                      <Text style={styles.jobTitle}>{job.title}</Text>
                      <TouchableOpacity style={styles.saveBtn}>
                        <Image source={require('../../assets/save.png')} style={styles.saveAsset} />
                      </TouchableOpacity>
                    </View>

                    {/* Tag boxes row (render per job.tags) */}
                    <View style={styles.tagRow}>
                      {job.tags.map((t, ti) => {
                        if (t.type === 'text') {
                          // Urgent style (red dim)
                          return (
                            <View
                              key={ti}
                              style={[styles.tagBox, styles.tagBoxRed, ti > 0 ? { marginLeft: 10 } : null]}
                            >
                              <Text style={[styles.tagText, styles.tagTextRed]}>{t.text}</Text>
                            </View>
                          );
                        }

                        // icon-based tags
                        return (
                          <View key={ti} style={[styles.tagBox, ti > 0 ? { marginLeft: 10 } : null]}>
                            {t.type === 'ion' && <Ionicons name={t.icon} size={18} style={styles.tagIcon} />}
                            {t.type === 'mc' && <MaterialCommunityIcons name={t.icon} size={18} style={styles.tagIcon} />}
                            {t.type === 'fa' && <FontAwesome name={t.icon} size={18} style={styles.tagIcon} />}
                            {t.type === 'entypo' && <Entypo name={t.icon} size={18} style={styles.tagIcon} />}
                            <Text style={styles.tagText}>{t.text}</Text>
                          </View>
                        );
                      })}
                    </View>

                    {/* meta row */}
                    <View style={styles.metaRow}>
                      <Text style={styles.metaTextGreen}>{job.applicants}</Text>
                      <Entypo name="dot-single" size={18} style={styles.metaDot} />
                      <Text style={styles.metaText}>{job.positions}</Text>
                      <Entypo name="dot-single" size={18} style={styles.metaDot} />
                      <Text style={styles.metaTextGreen}>{job.match}</Text>
                    </View>

                    {/* separator */}
                    <View style={styles.separator} />

                    {/* footer row: company and view details */}
                    <View style={styles.cardFooter}>
                      <Text style={styles.companyFooterText}>HireSide</Text>
                      <TouchableOpacity style={styles.viewButton}>
                        <Text style={styles.viewButtonText}>View Details</Text>
                      </TouchableOpacity>
                    </View>

                    {/* posted time below footer */}
                    <Text style={styles.postedText}>{job.posted}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Overview */}
          {activeTab === 'Overview' && (
            <View style={styles.OverviewContainer}>
              <Text style={styles.sectionTitle}>About</Text>

              {/* Main overview card */}
              <View style={styles.overviewCard}>
                <Text style={styles.cardHeading}>Slogan</Text>
                <Text style={styles.cardSubtitle}>Find the job you deserve</Text>

                <Text style={[styles.cardHeading, { marginTop: 12 }]}>Our Mission & Values</Text>
                <Text style={styles.cardSubtitle}>
                  Hireside is cloud based software developed by Verge.Inc. It is a revolutionary platform that seamlessly connects talented individuals with dynamic companies. HireSide helps
                </Text>

                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
              </View>

              {/* Two small cards in a row */}
              <View style={{ flexDirection: 'row', marginTop: 12 }}>
                <View style={styles.smallCard}>
                  <View style={styles.smallCardRow}>
                    <Image source={require('../../assets/group.png')} style={styles.smallIcon} />
                    <Text style={styles.smallCardTopText}>1001-2501</Text>
                  </View>
                  <Text style={styles.smallCardLabel}>Company Size</Text>
                </View>

                <View style={[styles.smallCard, { marginLeft: 12 }]}>
                  <View style={styles.smallCardRow}>
                    <Image source={require('../../assets/location.png')} style={styles.smallIcon} />
                    <Text style={styles.smallCardTopText}>UAE</Text>
                  </View>
                  <Text style={styles.smallCardLabel}>Headquarters</Text>
                </View>
              </View>

              {/* Industry card */}
              <View style={styles.overviewCard2}>
                <View style={styles.smallCardRow}>
                  <Image source={require('../../assets/building.png')} style={styles.smallIcon} />
                  <Text style={[styles.smallCardTopText, { flex: 1 }]}>IT Services and IT Consulting</Text>
                </View>
                <Text style={styles.smallCardLabel}>Industry</Text>
              </View>

              {/* Growth labels */}
              <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Growth over time</Text>
              <Text style={styles.employessText}>Number of Employees</Text>

              {/* ====== Line chart (react-native-chart-kit) ====== */}
              <View style={{ marginTop: 8, alignItems: 'center' }}>
                <LineChart
                  data={chartData}
                  width={screenWidth - 40} // container padding 20 left + 20 right
                  height={220}
                  withShadow={false}
                  withInnerLines={true}
                  withOuterLines={false}
                  withVerticalLines={false}
                  withHorizontalLabels={true}
                  yAxisInterval={1}
                  chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(12,100,174, ${opacity})`, // line color
                    labelColor: (opacity = 1) => `rgba(80,80,80, ${opacity})`,
                    propsForDots: {
                      r: '4',
                      strokeWidth: '2',
                      stroke: '#0C64AE',
                      fill: '#0C64AE',
                    },
                    propsForBackgroundLines: {
                      stroke: '#f0f0f0',
                      strokeDasharray: '' // solid grid lines
                    }
                  }}
                  style={{
                    borderRadius: 12,
                    paddingRight: 24,
                    backgroundColor: '#fff',
                    marginTop: 10,
                  }}
                  // show y-labels formatted as "1.8k"
                  formatYLabel={(y) => {
                    const n = parseFloat(y);
                    if (isNaN(n)) return y;
                    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
                    return `${n}`;
                  }}
                  // custom tooltip over one dot (uses renderDotContent)
                  renderDotContent={({ x, y, index }) => {
                    if (index !== tooltipIndex) return null;
                    // position bubble centered above dot
                    return (
                      <View key={`tooltip-${index}`} style={{ position: 'absolute', left: x - 48, top: y - 70, width: 96, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#071425', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 18 }}>
                          <Text style={{ color: '#fff', fontWeight: '700' }}>{(chartData.datasets[0].data[index] >= 1000) ? `${(chartData.datasets[0].data[index]/1000).toFixed(1)}k` : chartData.datasets[0].data[index]}</Text>
                          <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>Employees{'\n'}Dec, {chartData.labels[index]}</Text>
                        </View>
                        {/* small pointer dot under bubble */}
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#071425', marginTop: 6 }} />
                      </View>
                    );
                  }}
                />
              </View>
              {/* ====== end chart ====== */}

            </View>
          )}

          {/* Reviews */}
          {activeTab === 'Reviews' && (
            <View>
              <Text style={styles.sectionTitle}>Reviews</Text>
              <Text style={styles.text}>User reviews will be shown here.</Text>
            </View>
          )}

          {/* People */}
          {activeTab === 'People' && (
            <View>
              <Text style={styles.sectionTitle}>People</Text>
              <Text style={styles.text}>People associated with the company.</Text>
            </View>
          )}

          {/* Gallery */}
          {activeTab === 'Gallery' && (
            <View>
              <Text style={styles.sectionTitle}>Gallery</Text>
              <Text style={styles.text}>Company gallery images here.</Text>
            </View>
          )}

        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default CompanyDetailsScreen;

/* (keep your existing styles - unchanged) */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  headerBg: { width: '100%', height: 180, position: 'relative', marginTop: -70 },
  leftIcon: { position: 'absolute', top: 40, left: 20, width: 30, height: 30, resizeMode: 'contain' },
  logoContainer: { position: 'absolute', left: 20, bottom: -30 },
  logoImage: { width: 80, height: 80, borderRadius: 10, resizeMode: 'contain', marginBottom: 10 },

  content: { marginTop: 40, paddingHorizontal: 20 },
  companyBlock: { marginBottom: 14 },
  companyRow: { flexDirection: 'row', alignItems: 'center' },
  companyName: { fontSize: 18, fontWeight: '700', marginRight: 8 },
  verifiedIcon: { color: '#0C64AE' },
  companySubtitle: { marginTop: 6, fontSize: 13, color: '#666' },

  infoRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 10 },
  infoText: { marginRight: 10, marginLeft: 6, fontSize: 13, color: '#444' },
  dotIcon: { marginHorizontal: 4 },
  linkIcon: { marginLeft: 6 },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, paddingHorizontal: 6 },
  statCol: { alignItems: 'center', width: '33%' },
  statNumber: { fontSize: 16, fontWeight: '700' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 4 },

  followButton: {
    marginTop: 14,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: '#0C64AE'
  },
  followButtonText: { color: '#fff', fontWeight: '600' },

  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  text: { fontSize: 14, color: '#555' },

  /* header2 (adjusted) */
  header2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 14,
    zIndex: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  header2Row1: { flexDirection: 'row', alignItems: 'center' },
  header2LeftIcon: { width: 24, height: 24, marginRight: 10, resizeMode: 'contain' },
  header2Logo: { width: 32, height: 32, marginRight: 10, resizeMode: 'contain' },
  header2Title: { fontSize: 18, fontWeight: '700' },
  header2Subtitle: { fontSize: 12, color: '#666', marginTop: 3 },

  /* compact tabs */
  headerTabsContainer: { marginTop: 12 },
  tabItemCompact: { paddingVertical: 6, paddingHorizontal: 10, marginRight: 8 },
  activeTabItemCompact: { borderBottomWidth: 2, borderBottomColor: '#007AFF' },
  tabTextCompact: { fontSize: 13, color: '#444' },
  activeTabTextCompact: { color: '#007AFF', fontWeight: '600' },

  /* content tabs */
  tabBar: { marginTop: 14, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 },
  tabItem: { paddingVertical: 8, paddingHorizontal: 12, marginRight: 10 },
  activeTabItem: { borderBottomWidth: 2, borderBottomColor: '#007AFF' },
  tabText: { fontSize: 14, color: '#555' },
  activeTabText: { color: '#007AFF', fontWeight: '600' },

  /* job card styles */
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    elevation: 5,
    borderColor: '#eee',
  },
  jobTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  jobTitle: { fontSize: 18, fontWeight: '700', flex: 1, paddingRight: 8 },
  saveBtn: { padding: 6, alignSelf: 'flex-start', marginTop: -10 },
  saveAsset: { width: 22, height: 22, resizeMode: 'contain' },

  /* tag boxes */
  tagRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f4',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  tagBoxRed: {
    backgroundColor: '#ffecec',
  },
  tagIcon: { color: '#444' },
  tagText: { fontSize: 13, color: '#444', marginLeft: 8, fontWeight: '500' },
  tagTextRed: { color: '#d32f2f', fontWeight: '700' },

  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  metaTextGreen: { fontSize: 14, color: '#0a8a2e', fontWeight: '600' },
  metaText: { fontSize: 14, color: '#444' },
  metaDot: { marginHorizontal: 8, color: '#666' },

  separator: { height: 1, backgroundColor: '#e6e6e6', marginVertical: 12 },

  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  companyFooterText: { fontSize: 14, fontWeight: '600' },
  viewButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: '#0C64AE' },
  viewButtonText: { color: '#0C64AE', fontWeight: '600' },

  postedText: { fontSize: 12, color: '#888', marginTop: 8 },

  /* Overview styles */
  OverviewContainer:{marginBottom:10},
  overviewCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 8,
    borderWidth: 1,
    elevation:3,
    borderColor: '#eee',
  },
  overviewCard2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    marginTop: 12,
    borderWidth: 1,
    elevation:3,
    borderColor: '#eee',
  },
  cardHeading: { fontSize: 16, fontWeight: '700' },
  cardSubtitle: { fontSize: 14, marginTop: 6, lineHeight: 18 },
  readMore: { marginTop: 8,marginLeft:130, color: '#0C64AE', textDecorationLine: 'underline', fontWeight: '600' },

  smallCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    elevation:3,
    borderColor: '#eee',
  },
  sectionTitle:{fontSize:16,fontWeight:"700"},
  employessText:{fontSize:14, marginTop:4},
  smallCardRow: { flexDirection: 'row', alignItems: 'center' },
  smallIcon: { width: 26, height: 26, resizeMode: 'contain' },
  smallCardTopText: { fontSize: 14, fontWeight: '700', marginLeft: 10 },
  smallCardLabel: { fontSize: 12, marginTop: 8 },

  /* dummy content (kept for other tabs) */
  dummyBox: { padding: 14, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  dummyTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  dummyText: { fontSize: 13, color: '#555' },
});










