import React from "react";
import {
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import OnboardingScreen1 from "../Onboarding/OnboardingScreen1";

const { width, height } = Dimensions.get("window");

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;


const BUTTON_WIDTH = 320;
const BUTTON_HEIGHT = 76;
const BUTTON_BOTTOM = 40;

const scaleX = width / DESIGN_WIDTH;
const scaleY = height / DESIGN_HEIGHT;

const GetStartedScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../assets/SplashScreen.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Onboarding1")}
                style={[
                    styles.buttonContainer,
                    {
                        bottom: BUTTON_BOTTOM * scaleY, // adjusted bottom spacing
                    },
                ]}
            >
                <Image
                    source={require("../../assets/Button.png")}
                    style={{
                        width: BUTTON_WIDTH * scaleX,
                        height: BUTTON_HEIGHT * scaleY,
                        resizeMode: "contain",
                    }}
                />
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        alignSelf: "center",
    },
});
