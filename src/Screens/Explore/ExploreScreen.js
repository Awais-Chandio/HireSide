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

const COUNTRIES = [
  "India",
  "China",
  "Pakistan",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Africa",
  "Canada",
];

const SAMPLE_CITIES = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Dubai",
  "London",
  "New York",
  "Toronto",
  "Mumbai",
  "Beijing",
  "Shanghai",
];


const INDUSTRIES = [
  "Healthcare and Social Assistance",
  "Real Estate and Rental and Leasing",
  "Arts, Entertainment and Recreation",
  "Agriculture, Forestry, Fishing and Hunting",
  "Educational Services",
  "Finance and Insurance",
];

const ExploreScreen = () => {
  const [activeTab, setActiveTab] = useState("Jobs");
  const [isJobsModalVisible, setJobsModalVisible] = useState(false);
  const [isCompaniesModalVisible, setCompaniesModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");


  const [easyApply, setEasyApply] = useState(false);
  const [nearbyJobs, setNearbyJobs] = useState(false);


  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

 
  const [isCountryModalVisible, setCountryModalVisible] = useState(false);
  const [isCityModalVisible, setCityModalVisible] = useState(false);


  const [countrySearchText, setCountrySearchText] = useState("");
  const [selectedCountryLocal, setSelectedCountryLocal] = useState("");

  const [citySearchText, setCitySearchText] = useState("");
  const [selectedCitiesLocal, setSelectedCitiesLocal] = useState([]);

 
  const [selectedIndustries, setSelectedIndustries] = useState([]); // parent
  const [isIndustryModalVisible, setIndustryModalVisible] = useState(false);
  const [industrySearchText, setIndustrySearchText] = useState("");
  const [selectedIndustriesLocal, setSelectedIndustriesLocal] = useState([]);

  const openJobsModal = () => setJobsModalVisible(true);
  const closeJobsModal = () => setJobsModalVisible(false);
  const openCompaniesModal = () => setCompaniesModalVisible(true);
  const closeCompaniesModal = () => setCompaniesModalVisible(false);

 
  const removeSelectedCity = (city) =>
    setSelectedCities((prev) => prev.filter((c) => c !== city));


  const removeSelectedIndustry = (industry) =>
    setSelectedIndustries((prev) => prev.filter((i) => i !== industry));


 
  const FilterOptions = ({ onClose, mode = "jobs" }) => (
    <View style={styles.filterContainer}>
      <View style={styles.modalHeaderRow}>
        <Text style={styles.modalTitle}>Filter Options</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Easy Apply on HireSide</Text>
          <Switch
            value={easyApply}
            onValueChange={setEasyApply}
            trackColor={{ false: "#ccc", true: styleConfig.primaryColor }}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Near by Jobs</Text>
          <Switch
            value={nearbyJobs}
            onValueChange={setNearbyJobs}
            trackColor={{ false: "#ccc", true: styleConfig.primaryColor }}
          />
        </View>

       
        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionLabel}>Location</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity
              style={[styles.dropdown, { flex: 1, marginRight: 8 }]}
              onPress={() => {
                setSelectedCountryLocal(selectedCountry || "");
                setCountryModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>
                {selectedCountry ? selectedCountry : "Select Country"}
              </Text>
              <Icon name="chevron-down" size={18} color="#555" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.dropdown, { flex: 1, marginLeft: 8 }]}
              onPress={() => {
                setSelectedCitiesLocal(selectedCities.slice());
                setCityModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>Select City</Text>
              <Icon name="chevron-down" size={18} color="#555" />
            </TouchableOpacity>
          </View>

        
          <View style={{ marginTop: 12 }}>
            {selectedCities.length === 0 ? null : (
              <View style={styles.chipRow}>
                {selectedCities.map((c) => (
                  <View key={c} style={styles.chip}>
                    <Text style={styles.chipText}>{c}</Text>
                    <TouchableOpacity
                      onPress={() => removeSelectedCity(c)}
                      style={{ marginLeft: 8 }}
                    >
                      <Text style={{ fontWeight: "700" }}>✕</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>


        {mode === "companies" ? (
          <View style={{ marginTop: 20 }}>
           
            <TouchableOpacity
              style={[styles.dropdown, { marginTop: 12 }]}
              onPress={() => {
                setSelectedIndustriesLocal(selectedIndustries.slice());
                setIndustryModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>
                {selectedIndustries.length > 0
                  ? `${selectedIndustries.length} selected`
                  : "Select Industry"}
              </Text>
              <Icon name="chevron-down" size={18} color="#555" />
            </TouchableOpacity>

         
            <View style={{ marginTop: 12 }}>
              {selectedIndustries.length === 0 ? null : (
                <View style={styles.chipRow}>
                  {selectedIndustries.map((ind) => (
                    <View key={ind} style={styles.chip}>
                      <Text style={styles.chipText}>{ind}</Text>
                      <TouchableOpacity
                        onPress={() => removeSelectedIndustry(ind)}
                        style={{ marginLeft: 8 }}
                      >
                        <Text style={{ fontWeight: "700" }}>✕</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        ) : (
     
          <>
            <View style={{ marginTop: 30, }}>
              <Text style={styles.sectionLabel}>Date Posted</Text>
           
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.sectionLabel}>Experienced Level</Text>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.sectionLabel}>Job Type</Text>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.sectionLabel}>Job Mode</Text>
            </View>
          </>
        )}

        <TouchableOpacity style={styles.showResultsBtn} onPress={() => {}}>
          <Text style={styles.showResultsText}>Show 300 results</Text>
        </TouchableOpacity>
      </ScrollView>

      
      <Modal
        isVisible={isCountryModalVisible}
        onBackdropPress={() => setCountryModalVisible(false)}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View style={[styles.nestedModal, { height: "85%",paddingHorizontal:20,paddingTop:30 }]}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedCountry(selectedCountryLocal);
                setCountryModalVisible(false);
              }}
            >
              <Text style={[styles.closeButton, { fontSize: 16 }]}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 16 }}>
            <View style={[styles.searchInputWrap, { height: 44 }]}>
              <TextInput
                placeholder="Search Country"
                placeholderTextColor="#999"
                style={[styles.searchInput, { paddingVertical: 8 }]}
                value={countrySearchText}
                onChangeText={setCountrySearchText}
              />
              <TouchableOpacity style={styles.searchIconWrap}>
                <Icon name="search" size={18} />
              </TouchableOpacity>
            </View>

            <ScrollView style={{ marginTop: 12 }}>
              {COUNTRIES.filter((c) =>
                c.toLowerCase().includes(countrySearchText.toLowerCase())
              ).map((c) => (
                <TouchableOpacity
                  key={c}
                  style={styles.listRow}
                  onPress={() => {
                    setSelectedCountryLocal(c);
                  }}
                >
                  <Text
                    style={[
                      styles.listText,
                      selectedCountryLocal === c ? { fontWeight: "700" } : {},
                    ]}
                  >
                    {c}
                  </Text>
                  {selectedCountryLocal === c && <Icon name="check" size={18} />}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

   
      <Modal
        isVisible={isCityModalVisible}
        onBackdropPress={() => setCityModalVisible(false)}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View style={[styles.nestedModal, { height: "88%",paddingHorizontal:20,paddingTop:30 }]}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>Select City</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedCities(selectedCitiesLocal.slice());
                setCityModalVisible(false);
              }}
            >
              <Text style={[styles.closeButton, { fontSize: 16 }]}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 16 }}>
            <View style={{ minHeight: 60, paddingVertical: 8 }}>
              {selectedCitiesLocal.length === 0 ? (
                <Text style={{ color: "#999" }}>No cities selected</Text>
              ) : (
                <View style={styles.chipRow}>
                  {selectedCitiesLocal.map((c) => (
                    <View key={c} style={styles.chip}>
                      <Text style={styles.chipText}>{c}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          setSelectedCitiesLocal((prev) =>
                            prev.filter((x) => x !== c)
                          )
                        }
                        style={{ marginLeft: 8 }}
                      >
                        <Text style={{ fontWeight: "700" }}>✕</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <View style={[styles.searchInputWrap, { height: 44, marginBottom: 12 }]}>
              <TextInput
                placeholder="Search City"
                placeholderTextColor="#999"
                style={[styles.searchInput, { paddingVertical: 8 }]}
                value={citySearchText}
                onChangeText={setCitySearchText}
              />
              <TouchableOpacity style={styles.searchIconWrap}>
                <Icon name="search" size={18} />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {SAMPLE_CITIES.filter((c) =>
                c.toLowerCase().includes(citySearchText.toLowerCase())
              ).map((city) => {
                const checked = selectedCitiesLocal.includes(city);
                return (
                  <TouchableOpacity
                    key={city}
                    style={styles.cityRow}
                    onPress={() => {
                      if (checked) {
                        setSelectedCitiesLocal((prev) =>
                          prev.filter((x) => x !== city)
                        );
                      } else {
                        setSelectedCitiesLocal((prev) => [...prev, city]);
                      }
                    }}
                  >
                    <View style={[styles.checkbox, checked ? styles.checkboxChecked : {}]}>
                      {checked && <Icon name="check" size={14} color="#fff" />}
                    </View>
                    <Text style={styles.listText}>{city}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>


      <Modal
        isVisible={isIndustryModalVisible}
        onBackdropPress={() => setIndustryModalVisible(false)}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View style={[styles.nestedModal, { height: "88%" }]}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>Select Industry</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedIndustries(selectedIndustriesLocal.slice());
                setIndustryModalVisible(false);
              }}
            >
              <Text style={[styles.closeButton, { fontSize: 16 }]}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 16 }}>
            <View style={{ minHeight: 60, paddingVertical: 8 }}>
              {selectedIndustriesLocal.length === 0 ? (
                <Text style={{ color: "#999" }}>No industries selected</Text>
              ) : (
                <View style={styles.chipRow}>
                  {selectedIndustriesLocal.map((ind) => (
                    <View key={ind} style={styles.chip}>
                      <Text style={styles.chipText}>{ind}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          setSelectedIndustriesLocal((prev) =>
                            prev.filter((x) => x !== ind)
                          )
                        }
                        style={{ marginLeft: 8 }}
                      >
                        <Text style={{ fontWeight: "700" }}>✕</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>


            <View style={[styles.searchInputWrap, { height: 44, marginBottom: 12 }]}>
              <TextInput
                placeholder="Search Industry"
                placeholderTextColor="#999"
                style={[styles.searchInput, { paddingVertical: 8 }]}
                value={industrySearchText}
                onChangeText={setIndustrySearchText}
              />
              <TouchableOpacity style={styles.searchIconWrap}>
                <Icon name="search" size={18} />
              </TouchableOpacity>
            </View>

           
            <ScrollView>
              {INDUSTRIES.filter((i) =>
                i.toLowerCase().includes(industrySearchText.toLowerCase())
              ).map((ind) => {
                const checked = selectedIndustriesLocal.includes(ind);
                return (
                  <TouchableOpacity
                    key={ind}
                    style={styles.cityRow}
                    onPress={() => {
                      if (checked) {
                        setSelectedIndustriesLocal((prev) => prev.filter((x) => x !== ind));
                      } else {
                        setSelectedIndustriesLocal((prev) => [...prev, ind]);
                      }
                    }}
                  >
                    <View style={[styles.checkbox, checked ? styles.checkboxChecked : {}]}>
                      {checked && <Icon name="check" size={14} color="#fff" />}
                    </View>
                    <Text style={styles.listText}>{ind}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );

  
  const JobCard = ({
    title = "Senior Python Developer",
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


  return (
    <View style={[styles.screen, { backgroundColor: styleConfig.bgColor }]}>
     
      <View style={styles.topButtonsRow}>
        <TouchableOpacity
          style={[
            styles.topButton,
            activeTab === "Jobs" ? styles.topButtonActive : styles.topButtonInactive,
          ]}
          onPress={() => setActiveTab("Jobs")}
        >
          <Text
            style={[
              styles.topButtonText,
              activeTab === "Jobs" ? styles.topButtonTextActive : styles.topButtonTextInactive,
            ]}
          >
            Jobs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.topButton,
            activeTab === "Companies" ? styles.topButtonActive : styles.topButtonInactive,
          ]}
          onPress={() => setActiveTab("Companies")}
        >
          <Text
            style={[
              styles.topButtonText,
              activeTab === "Companies" ? styles.topButtonTextActive : styles.topButtonTextInactive,
            ]}
          >
            Companies
          </Text>
        </TouchableOpacity>
      </View>

 
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
                <Image source={require("../../assets/search.png")} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.searchBarRect} onPress={openJobsModal}>
              <Image source={require("../../assets/searchbar.png")} style={styles.searchBarImage} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Recent Jobs</Text>

      
          <JobCard />

         
          <JobCard
            title="User Experienced Designer"
            companyLogo={require("../../assets/figma.png")}
            companyName="Figma"
            timeText="2 months ago"
            locationText="Karachi, Sindh"
          />

         
          <JobCard
            title="Ethical Hacker"
            companyLogo={require("../../assets/diamond.png")}
            companyName="Verizon Infinity"
            timeText="5 months ago"
            locationText="USA, London"
          />
        </ScrollView>
      )}

  
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
                <Image source={require("../../assets/search.png")} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.searchBarRect} onPress={openCompaniesModal}>
              <Image source={require("../../assets/searchbar.png")} style={styles.searchBarImage} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Popular Companies</Text>
          {renderCompanyGrid()}
        </ScrollView>
      )}

     
      <Modal
        isVisible={isJobsModalVisible}
        onBackdropPress={closeJobsModal}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View style={[styles.fullModal, { height: styleConfig.companiesModalHeight }]}>
        
          <FilterOptions onClose={closeJobsModal} mode="jobs" />
        </View>
      </Modal>

   
      <Modal
        isVisible={isCompaniesModalVisible}
        onBackdropPress={closeCompaniesModal}
        backdropOpacity={0.3}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.fullModalWrapper}
      >
        <View style={[styles.fullModal, { height: styleConfig.companiesModalHeight }]}>
        
          <FilterOptions onClose={closeCompaniesModal} mode="companies" />
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

    alignItems: "center",
    justifyContent: "center",
  },
  topButtonActive: { backgroundColor: styleConfig.primaryColor },
  topButtonInactive: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
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
    width: 100,
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
    backgroundColor: "#fff",
  },
  dropdownText: { color: "#333", fontSize: 15 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F0F7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { color: "#000", fontSize: 13 },
  showResultsBtn: {
    marginTop: 2,
    backgroundColor: styleConfig.primaryColor,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  showResultsText: { color: "#fff", fontSize: 16, fontWeight: "600" },


  nestedModal: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  listRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  listText: { fontSize: 15 },
  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: styleConfig.primaryColor,
    borderColor: styleConfig.primaryColor,
  },
});
