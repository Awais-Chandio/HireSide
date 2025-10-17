import React, { useState, useRef } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,
  Animated, ScrollView
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CompanyDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState('Open Jobs');
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolate header fade
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

  return (
    <View style={styles.container}>
      {/* White header (fades in on Jobs scroll) */}
      <Animated.View style={[styles.header2, { opacity: visibleHeaderOpacity }]}>
        <View style={styles.header2Row1}>
          <Image source={require('../../assets/leftarrownew.png')} style={styles.header2LeftIcon} />
          <Image source={require('../../assets/logo.png')} style={styles.header2Logo} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.header2Title}>HireSide</Text>
            <AntDesign name="checkcircle" size={16} style={styles.verifiedIcon} />
          </View>
        </View>
        <Text style={styles.header2Subtitle}>Software Development Company</Text>

        {/* Compact tabs inside header (visible for non-Jobs and when header fades in) */}
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
        contentContainerStyle={{ paddingTop: 70 }}
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

          {/* CONTENT TABS: render only for Jobs tab. They will fade out as header fades in */}
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

          {/* === Tab contents (each has its own dummy scrollable blocks) === */}

          {/* Open Jobs */}
          {activeTab === 'Open Jobs' && (
            <View>
              <Text style={styles.sectionTitle}>Open Jobs</Text>
              <Text style={styles.text}>List of open jobs will appear here.</Text>
              <View style={{ marginTop: 16 }}>
                {Array.from({ length: 18 }).map((_, i) => (
                  <View key={i} style={styles.dummyBox}>
                    <Text style={styles.dummyTitle}>Job Title #{i + 1}</Text>
                    <Text style={styles.dummyText}>Short job description placeholder — responsibilities, requirements, etc.</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Overview */}
          {activeTab === 'Overview' && (
            <View>
              <Text style={styles.sectionTitle}>Overview</Text>
              <Text style={styles.text}>Company overview content goes here.</Text>
              <View style={{ marginTop: 16 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <View key={i} style={styles.dummyBox}>
                    <Text style={styles.dummyTitle}>Overview item #{i + 1}</Text>
                    <Text style={styles.dummyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use this to test scrolling.</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Reviews */}
          {activeTab === 'Reviews' && (
            <View>
              <Text style={styles.sectionTitle}>Reviews</Text>
              <Text style={styles.text}>User reviews will be shown here.</Text>
              <View style={{ marginTop: 16 }}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <View key={i} style={styles.reviewBox}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                      <Text style={styles.dummyTitle}>User {i + 1}</Text>
                      <Text style={styles.ratingText}>⭐ {Math.round((Math.random() * 2) + 3)}</Text>
                    </View>
                    <Text style={styles.dummyText}>This is a sample review text. It helps you check how reviews scroll under the header.</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* People */}
          {activeTab === 'People' && (
            <View>
              <Text style={styles.sectionTitle}>People</Text>
              <Text style={styles.text}>People associated with the company.</Text>
              <View style={{ marginTop: 16 }}>
                {Array.from({ length: 14 }).map((_, i) => (
                  <View key={i} style={styles.personBox}>
                    <View style={styles.personAvatarPlaceholder}>
                      <Text style={{ color: '#fff', fontWeight: '700' }}>{String.fromCharCode(65 + (i % 26))}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text style={styles.dummyTitle}>Person Name #{i + 1}</Text>
                      <Text style={styles.dummyText}>Role: Software Engineer</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Gallery */}
          {activeTab === 'Gallery' && (
            <View>
              <Text style={styles.sectionTitle}>Gallery</Text>
              <Text style={styles.text}>Company gallery images here.</Text>
              <View style={{ marginTop: 16 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <View key={i} style={styles.galleryItem}>
                    <View style={styles.galleryPlaceholder}>
                      <Text style={styles.galleryText}>Image #{i + 1}</Text>
                    </View>
                    <Text style={[styles.dummyText, { marginTop: 8 }]}>Caption for image {i + 1}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Footer / preserved content */}
          <Text style={[styles.title, { marginTop: 20 }]}>Company Details</Text>
          <Text style={styles.text}>Here you can show more company info, description, etc.</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default CompanyDetailsScreen;

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
  verifiedIcon: { color: '#1DA1F2' },
  companySubtitle: { marginTop: 6, fontSize: 13, color: '#666' },
  infoRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 10 },
  infoText: { marginRight: 10, marginLeft: 6, fontSize: 13, color: '#444' },
  dotIcon: { marginHorizontal: 4 },
  linkIcon: { marginLeft: 6 },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, paddingHorizontal: 6 },
  statCol: { alignItems: 'center', width: '33%' },
  statNumber: { fontSize: 16, fontWeight: '700' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 4 },

  followButton: { marginTop: 14, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8, backgroundColor: '#007AFF' },
  followButtonText: { color: '#fff', fontWeight: '600' },

  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  text: { fontSize: 14, color: '#555' },

  /* header2 */
  header2: { position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 20, paddingBottom: 6, zIndex: 10 },
  header2Row1: { flexDirection: 'row', alignItems: 'center' },
  header2LeftIcon: { width: 24, height: 24, marginRight: 8, resizeMode: 'contain' },
  header2Logo: { width: 30, height: 30, marginRight: 8, resizeMode: 'contain' },
  header2Title: { fontSize: 18, fontWeight: '700' },
  header2Subtitle: { marginTop: 4, fontSize: 12, color: '#444' },

  /* header tabs compact */
  headerTabsContainer: { marginTop: 8, borderTopWidth: 0, borderBottomWidth: 0 },
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

  /* Dummy blocks styling */
  dummyBox: { backgroundColor: '#f9f9f9', padding: 14, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  dummyTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  dummyText: { fontSize: 13, color: '#555' },

  reviewBox: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  ratingText: { fontSize: 13, fontWeight: '700', color: '#444' },

  personBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  personAvatarPlaceholder: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#007AFF', alignItems: 'center', justifyContent: 'center' },

  galleryItem: { marginBottom: 16 },
  galleryPlaceholder: { height: 140, borderRadius: 8, backgroundColor: '#e6e6e6', alignItems: 'center', justifyContent: 'center' },
  galleryText: { color: '#555', fontWeight: '600' },

});
