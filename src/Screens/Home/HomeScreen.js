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
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Jobs");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOptionsModalVisible, setOptionsModalVisible] = useState(false); // ✅ new modal
  const [isReportModalVisible, setReportModalVisible] = useState(false); // ✅ report modal
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);

  const handleTabPress = (tab) => {
    if (tab === "News") {
      setActiveTab("News");
      setModalVisible(true);
    } else {
  
      setActiveTab("Jobs");
      setModalVisible(false);
    }
  };

  const isJobsActive = activeTab === "Jobs";
  const isNewsActive = activeTab === "News";


  const optionsList = [
    { icon: "plus", lib: "evil", text: "Follow (Company Name)" },
    { icon: "bell", lib: "evil", text: "Notifications", toggle: true },
    { icon: "minus", lib: "evil", text: "Not Interested" },
  
    { icon: "help-outline", lib: "material", text: "Why am I seeing this?" },

    { icon: "x", lib: "feather", text: "Report" },
  ];

  return (
    <View style={styles.screen}>
   
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

     
      <View style={styles.bottomArea}>
   
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

    
        <ScrollView
          contentContainerStyle={styles.contentScroll}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "Jobs" ? (
            <>
           
              <View style={styles.rowTitle}>
                <Text style={styles.jobsTitle}>Jobs For You</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All &gt;</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.jobCard}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.jobTitle}>Senior Python Developer</Text>
                  <TouchableOpacity style={styles.saveBtn}>
                   
                    <MaterialIcon name="bookmark" size={22} color="#797c7e" />
                  </TouchableOpacity>
                </View>

            
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

                
                <View style={styles.salaryWrap}>
                  <Text style={styles.salaryText}>250k - 350k</Text>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>03 Applicants</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.infoText}>07 Positions</Text>
                </View>

              
                <View style={styles.cardDivider} />

              
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

           
              <View style={styles.rowTitle}>
                <Text style={styles.jobsTitle}>Job by Categories</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All &gt;</Text>
                </TouchableOpacity>
              </View>

           
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
            Follow your favourite companies and be the first one to receive{" "}
            <Text style={{ fontWeight: "700", color: "#0C64AE" }}>
              {" "}
              News Updates, Job Alerts, and announcements{" "}
            </Text>
            notifications at instance
          </Text>

          <View style={styles.infoBox}>
            <Image source={require("../../assets/bulf.png")} style={styles.infoIcon} />
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

          {optionsList.map((item, i) => {
            const IconComponent =
              item.lib === "material"
                ? MaterialIcon
                : item.lib === "feather"
                ? FeatherIcon
                : EvilIcon;

           
            if (item.text === "Report") {
              return (
                <View key={i}>
                  <TouchableOpacity
                    onPress={() => {
                      setOptionsModalVisible(false);
                      setReportModalVisible(true);
                    }}
                  >
                    <View style={styles.optionRow}>
                      <View style={styles.iconCircle}>
                        <IconComponent name={item.icon} size={18} color="#000" />
                      </View>
                      <Text style={styles.optionText}>{item.text}</Text>
                    </View>
                  </TouchableOpacity>
                  {i !== optionsList.length - 1 && <View style={styles.dividerLine} />}
                </View>
              );
            }

            return (
              <View key={i}>
                <View style={styles.optionRow}>
                  <View style={styles.iconCircle}>
                    <IconComponent name={item.icon} size={18} color="#000" />
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
                {i !== optionsList.length - 1 && <View style={styles.dividerLine} />}
              </View>
            );
          })}
        </View>
      </Modal>

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

        
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
            
              <FeatherIcon name="x" size={16} color="#000" />
            </View>
            <Text style={styles.reportText}>Inappropriate Content</Text>
          </TouchableOpacity>

         
          <View style={styles.dividerLine} />

      
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
              <FeatherIcon name="x" size={16} color="#000" />
            </View>
            <Text style={styles.reportText}>Misleading / Incorrect Information</Text>
          </TouchableOpacity>

       
          <View style={styles.dividerLine} />

         
          <TouchableOpacity style={styles.reportRow}>
            <View style={styles.reportIconCircle}>
              <FeatherIcon name="x" size={16} color="#000" />
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
   
    minHeight: 230,
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


  modalWrapper: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    height: "75%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 10,
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
    borderRadius: 25,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  completeButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  laterText: { color: "#777", fontSize: 13, marginTop: 10, textDecorationLine: "underline" },


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
    // backgroundColor: "#E8F0F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  optionText: { flex: 1, fontSize: 15, color: "#000" },
  dividerLine: { height: 1, backgroundColor: "#eee" },


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
    // backgroundColor: "#E8F0F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  reportText: { fontSize: 15, color: "#000", flex: 1 },
});
