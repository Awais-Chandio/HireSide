// ExploreScreen.js
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

const styleConfig = {
  bgColor: "#E8F0F7",
  primaryColor: "#0C64AE",
  textColor: "#000",
  inactiveTextColor: "#777",
  cardBackground: "#FFFFFF",
  companiesModalHeight: "85%",
  topButtonsHeight: 52,
  jobCardHeight: 250,
  spacing: 12,
};

const ExploreScreen = () => {
  const [activeTab, setActiveTab] = useState("Jobs");
  const [isJobsModalVisible, setJobsModalVisible] = useState(false);
  const [isCompaniesModalVisible, setCompaniesModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [easyApply, setEasyApply] = useState(false);
  const [nearbyJobs, setNearbyJobs] = useState(false);

  const openJobsModal = () => setJobsModalVisible(true);
  const closeJobsModal = () => setJobsModalVisible(false);
  const openCompaniesModal = () => setCompaniesModalVisible(true);
  const closeCompaniesModal = () => setCompaniesModalVisible(false);

  /**
   * JobCard component now accepts props so we can keep
   * the first card exactly as before (by using defaults),
   * and customize card 2 and 3 as the user requested.
   *
   * Props:
   *  - title
   *  - companyLogo
   *  - companyName
   *  - timeText
   *  - locationText
   *  - bottomAsset (require(...) image)
   *  - bottomAssetText (string)
   */
  const JobCard = ({
    title = "Senior Python Developers1",
    companyLogo = require("../../assets/dubai.png"),
    companyName = "Verge Systems pvt ltd.",
    timeText = "5 hours ago",
    locationText = "UAE Dubai",
    bottomAsset = null,
    bottomAssetText = "",
  }) => (
    <View style={styles.jobCard}>
      <View style={styles.cardTopRow}>
        <Text style={styles.jobTitle}>{title}</Text>
        <TouchableOpacity style={styles.saveBtn}>
          <Icon name="bookmark" size={25} color="#797c7eff" />
        </TouchableOpacity>
      </View>

      <View style={styles.tagsRow}>
        <View style={styles.tag1}>
          <Text style={styles.tag1Text}>Full-Time</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Remote</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>250k-350k</Text>
        </View>
      </View>

      {/* <View style={styles.salaryWrap}>
        <Text style={styles.salaryText}>250k - 350k</Text>
      </View> */}

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>03 Applicants</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.infoText}>07 Positions</Text>
      </View>

      <View style={styles.cardDivider} />

      <View style={styles.companyRow}>
        <View style={styles.companyLeft}>
          <Image
            source={companyLogo}
            style={styles.companyLogo}
            resizeMode="contain"
          />
          <Text style={styles.companyName}>{companyName}</Text>
          <Image
            source={require("../../assets/verified.png")}
            style={styles.verifiedIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.companyRight}>
          <Text style={styles.timeText}>{timeText}</Text>
        </View>
      </View>

      {/* If bottomAsset provided, show a divider (already present above) and the asset row */}
      {bottomAsset && (
        <>
          <View style={styles.cardDividerSmall} />
          <View style={styles.bottomAssetRow}>
            <Image source={bottomAsset} style={styles.bottomAssetImage} resizeMode="contain" />
            <Text style={styles.bottomAssetText}>{bottomAssetText}</Text>
          </View>
        </>
      )}

      <View style={styles.sheedi}>
        <Text style={styles.locationText}>{locationText}</Text>
      </View>
    </View>
  );

  // ✅ Updated renderCompanyGrid (unchanged except formatting)
  const renderCompanyGrid = () => {
    const companies = [
      {
        logo: require("../../assets/dubai.png"),
        title: ["WebHR - All-in-one", "HR Software"],
        subtitle: "SaaS Product",
      },
      {
        logo: require("../../assets/electric.png"),
        title: ["Iselectrics"],
        subtitle: "Electricity, heat, gas, and water",
      },
      {
        logo: require("../../assets/verge.png"),
        title: ["Verge Systems"],
        subtitle: "Software Development",
      },
      {
        logo: require("../../assets/card.png"),
        title: ["Toughzap Limited", "Card"],
        subtitle: "Mining industry",
      },
      {
        logo: require("../../assets/zen.png"),
        title: ["Zencorporation"],
        subtitle: "Construction Industry",
      },
      {
        logo: require("../../assets/fax.png"),
        title: ["Faxquote"],
        subtitle: "Transportation, warehouse",
      },
    ];

    const companyPairs = [];
    for (let i = 0; i < companies.length; i += 2) {
      companyPairs.push(companies.slice(i, i + 2));
    }

    return (
      <View style={{ marginTop: 8 }}>
        {companyPairs.map((pair, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            {pair.map((company, index) => (
              <View key={index} style={styles.companyCard}>
                <Image
                  source={company.logo}
                  style={styles.companyLogoTop}
                  resizeMode="contain"
                />

                {company.title.map((line, i) => (
                  <Text key={i} style={styles.companyTitle}>
                    {line}
                  </Text>
                ))}

                <Text style={styles.companySubtitle}>{company.subtitle}</Text>

                <Image
                  source={require("../../assets/position.png")}
                  style={styles.assetImage}
                  resizeMode="contain"
                />

                <Image
                  source={require("../../assets/follow.png")}
                  style={styles.assetImage}
                  resizeMode="contain"
                />
              </View>
            ))}
            {pair.length === 1 && (
              <View style={[styles.companyCard, { opacity: 0 }]} />
            )}
          </View>
        ))}
      </View>
    );
  };

  const FilterOptions = ({ onClose }) => (
    <View style={styles.filterContainer}>
      <View style={styles.modalHeaderRow}>
        <Text style={styles.modalTitle}>Filter Options</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Easy Apply</Text>
          <Switch
            value={easyApply}
            onValueChange={setEasyApply}
            trackColor={{ false: "#ccc", true: styleConfig.primaryColor }}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Nearby Jobs</Text>
          <Switch
            value={nearbyJobs}
            onValueChange={setNearbyJobs}
            trackColor={{ false: "#ccc", true: styleConfig.primaryColor }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionLabel}>Country</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Pakistan</Text>
            <Icon name="chevron-down" size={18} color="#555" />
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 16 }]}>City</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Karachi</Text>
            <Icon name="chevron-down" size={18} color="#555" />
          </View>

          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Lahore ✕</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Islamabad ✕</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionLabel}>Date Posted</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Past Week</Text>
            <Icon name="chevron-down" size={18} color="#555" />
          </View>
        </View>

        <TouchableOpacity style={styles.showResultsBtn}>
          <Text style={styles.showResultsText}>Show 300 Results</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <View style={[styles.screen, { backgroundColor: styleConfig.bgColor }]}>
      {/* Top Buttons */}
      <View style={styles.topButtonsRow}>
        <TouchableOpacity
          style={[
            styles.topButton,
            activeTab === "Jobs"
              ? styles.topButtonActive
              : styles.topButtonInactive,
          ]}
          onPress={() => setActiveTab("Jobs")}
        >
          <Text
            style={[
              styles.topButtonText,
              activeTab === "Jobs"
                ? styles.topButtonTextActive
                : styles.topButtonTextInactive,
            ]}
          >
            Jobs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.topButton,
            activeTab === "Companies"
              ? styles.topButtonActive
              : styles.topButtonInactive,
          ]}
          onPress={() => setActiveTab("Companies")}
        >
          <Text
            style={[
              styles.topButtonText,
              activeTab === "Companies"
                ? styles.topButtonTextActive
                : styles.topButtonTextInactive,
            ]}
          >
            Companies
          </Text>
        </TouchableOpacity>
      </View>

      {/* JOBS VIEW */}
      {activeTab === "Jobs" && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.searchRow}>
            <View style={styles.searchInputWrap}>
              <TextInput
                placeholder="Search Jobs or Companies Here"
                placeholderTextColor="#999"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
              <TouchableOpacity style={styles.searchIconWrap}>
                <Image
                  source={require("../../assets/search.png")}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.searchBarRect}
              onPress={openJobsModal}
            >
              <Image
                source={require("../../assets/searchbar.png")}
                style={styles.searchBarImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Recent Jobs</Text>

          {/* 1st card - unchanged */}
          <JobCard />

          {/* 2nd card - user requested changes */}
          <JobCard
            title="User Experienced Designer"
            // keep the same company logo/name layout as original (Microsoft.png) per instruction
            companyLogo={require("../../assets/figma.png")}
            companyName="Figma"
            timeText="2 months ago"
            locationText="Karachi, Sindh"
            // bottomAsset={require("../../assets/figma.png")}
            // bottomAssetText="Figma"
          />

          {/* 3rd card - user requested changes */}
          <JobCard
            title="Ethical Hacker"
            companyLogo={require("../../assets/diamond.png")}
            companyName="Verizon Infinity"
            timeText="5 months ago"
            locationText="USA, London"
            // bottomAsset={require("../../assets/diamond.png")}
            // bottomAssetText="Verizon Infinity"
          />
        </ScrollView>
      )}

      {/* COMPANIES VIEW */}
      {activeTab === "Companies" && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.searchRow}>
            <View style={styles.searchInputWrap}>
              <TextInput
                placeholder="Search Jobs or Companies Here"
                placeholderTextColor="#999"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
              <TouchableOpacity style={styles.searchIconWrap}>
                <Image
                  source={require("../../assets/search.png")}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.searchBarRect}
              onPress={openCompaniesModal}
            >
              <Image
                source={require("../../assets/searchbar.png")}
                style={styles.searchBarImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Popular Companies</Text>
          {renderCompanyGrid()}
        </ScrollView>
      )}

      {/* JOBS MODAL */}
      <Modal
        isVisible={isJobsModalVisible}
        onBackdropPress={closeJobsModal}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View
          style={[
            styles.fullModal,
            { height: styleConfig.companiesModalHeight },
          ]}
        >
          <FilterOptions onClose={closeJobsModal} />
        </View>
      </Modal>

      {/* COMPANIES MODAL */}
      <Modal
        isVisible={isCompaniesModalVisible}
        onBackdropPress={closeCompaniesModal}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View
          style={[
            styles.fullModal,
            { height: styleConfig.companiesModalHeight },
          ]}
        >
          <FilterOptions onClose={closeCompaniesModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  topButtonsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  topButton: {
    flex: 1,
    height: styleConfig.topButtonsHeight,
    borderRadius: 25,
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  topButtonActive: { backgroundColor: styleConfig.primaryColor },
  topButtonInactive: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d0d8e0",
  },
  topButtonText: { fontSize: 16, fontWeight: "600" },
  topButtonTextActive: { color: "#fff" },
  topButtonTextInactive: { color: styleConfig.textColor },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    elevation: 1,
  },
  searchInput: { flex: 1, fontSize: 15, color: "#000" },
  searchIconWrap: { paddingLeft: 8 },
  searchIcon: { width: 20, height: 20, tintColor: "#333" },
  searchBarRect: {
    width: 70,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  searchBarImage: { width: 56, height: 28 },
  sectionTitle: {
    marginTop: 6,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    color: styleConfig.textColor,
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
    marginBottom: 8,
  },
  cardTopRow: { flexDirection: "row", justifyContent: "space-between" },
  jobTitle: { fontSize: 16, fontWeight: "700", color: "#000" },
  saveBtn: { padding: 6 },
  tagsRow: { flexDirection: "row", marginTop: 10 },
  tag1: {
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  tag: {
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,

  },
  tagText: { fontSize: 15, fontWeight: "400" },
  salaryWrap: { marginTop: 12 },
  salaryText: { fontSize: 15, fontWeight: "500" },
  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  infoText: { color: "#555", fontSize: 13 },
  dot: { color: "#555", marginHorizontal: 8 },
  cardDivider: { height: 1, backgroundColor: "#eee", marginVertical: 10 },
  cardDividerSmall: { height: 1, backgroundColor: "#f5f5f5", marginVertical: 8 },
  companyRow: { flexDirection: "row", justifyContent: "space-between" },
  companyLeft: { flexDirection: "row", alignItems: "center" },
  companyLogo: { width: 48, height: 48, marginRight: 10 },
  companyName: { fontSize: 14, fontWeight: "600" },
  verifiedIcon: { width: 16, height: 16, marginLeft: 6 },
  companyRight: { alignItems: "flex-end" },
  timeText: { color: "#777", fontSize: 12 },
  bottomAssetRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 6,
  },
  bottomAssetImage: { width: 32, height: 32, marginRight: 10 },
  bottomAssetText: { fontSize: 14, fontWeight: "600", color: "#333" },
  sheedi: { marginTop: 6 },
  locationText: { fontSize: 13, color: "#666" },
  companyCard: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    marginHorizontal: 4,
    elevation: 2,
  },
  companyLogoTop: {
    width: 80,
    height: 80,
    marginBottom: 6,
  },
  companyTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  companySubtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 2,
    marginBottom: 6,
    textAlign: "center",
  },
  assetImage: {
    width:100,
    height: 40,
    marginVertical: 3,
    alignSelf: "center",
  },
  fullModalWrapper: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  fullModal: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  filterContainer: { flex: 1, padding: 20 },
  modalHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  modalTitle: { fontSize: 18, fontWeight: "600" },
  closeButton: { fontSize: 20, color: "#000" },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  switchLabel: { fontSize: 15, fontWeight: "500", color: "#333" },
  sectionLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
  },
  dropdownText: { color: "#333", fontSize: 15 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  chip: {
    backgroundColor: "#E8F0F7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { color: "#000", fontSize: 13 },
  showResultsBtn: {
    marginTop: 10,
    backgroundColor: styleConfig.primaryColor,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  showResultsText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
