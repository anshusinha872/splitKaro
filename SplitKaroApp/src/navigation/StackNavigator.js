import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TabNavigator from "./TabNavigator";

const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const hasLaunched = await AsyncStorage.getItem("isFirstLaunch");
      if (hasLaunched === null) {
        await AsyncStorage.setItem("isFirstLaunch", "false");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };

    checkOnboarding();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Optionally, add a loading spinner here
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstLaunch && (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainApp" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
