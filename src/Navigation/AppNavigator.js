import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoaderScreen from '../Screens/SplashScreens/LoaderScreen';
import GetStartedScreen from "../Screens/Onboarding/GetStartedScreen";
import OnboardingScreen1 from '../Screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from '../Screens/Onboarding/OnboardingScreen2';
import SignInScreen from "../Screens/SignUp_SignIn/Sign_in_Screen";
import SignUpScreen from "../Screens/SignUp_SignIn/Sign_up_Screen";
import VerifyEmailScreen from "../Screens/SignUp_SignIn/Verify_email";
import NewPasswordScreen from "../Screens/SignUp_SignIn/NewPassword_Screen";
import CompleteProfile_01 from "../Screens/Profile/CompleteProfile_01"
import CompleteProfile_02 from "../Screens/Profile/CompleteProfile_02"
import CompleteProfile_03 from "../Screens/Profile/CompleteProfile_03"
import CompleteProfile_04 from '../Screens/Profile/CompleteProfile_04';
import CompleteProfile_05 from '../Screens/Profile/CompleteProfile_05';
import MainTabs from "../Navigation/MainTab";
import CompanyDetailsScreen from "../Screens/CompanyDetail/CompanyDetails"


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loader" component={LoaderScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen  name="signin" component={SignInScreen} /> 
        <Stack.Screen  name="signup" component={SignUpScreen} />
        <Stack.Screen  name="verifyEmail" component={VerifyEmailScreen} />
        <Stack.Screen  name="Newpassword" component={NewPasswordScreen} />
        <Stack.Screen  name="CompleteProfile01" component={CompleteProfile_01} />
        <Stack.Screen  name="CompleteProfile02" component={CompleteProfile_02} />
        <Stack.Screen  name="CompleteProfile03" component={CompleteProfile_03} />
        <Stack.Screen  name="CompleteProfile04" component={CompleteProfile_04} />
        <Stack.Screen  name="CompleteProfile05" component={CompleteProfile_05} />
        <Stack.Screen  name="MainTabs" component={MainTabs} />
         <Stack.Screen  name="CompanyDetails" component={CompanyDetailsScreen} />


        

        
    </Stack.Navigator>
  );
};

export default AppNavigator;
