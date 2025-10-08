import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoaderScreen from '../Screens/SplashScreens/LoaderScreen';
import GetStartedScreen from "../Screens/Onboarding/GetStartedScreen";
import OnboardingScreen1 from '../Screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from '../Screens/Onboarding/OnboardingScreen2';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loader" component={LoaderScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        
    </Stack.Navigator>
  );
};

export default AppNavigator;
