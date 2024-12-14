import React from "react";
import { View, Text, Button, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";

const OnboardingScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.replace("Login"); // Navigate to Login after onboarding
  };
  const DoneButtonComponent = ({ ...props }) => (
    <TouchableOpacity style={styles.doneBtn} onPress={handleDone}>
      <Ionicons name="arrow-forward" size={30} color="#000" />
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo/logo.png")}
          />
        </View>
        <Text>Transforming how people spend together</Text>
      </View>
      <Onboarding
        containerStyles={{
          paddingHorizontal: 15,
        }}
        DoneButtonComponent={DoneButtonComponent}
        pages={[
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={{ width: 300, height: 200 }}
                source={require("../../assets/animation/welcome.json")}
                autoPlay
                loop
              />
            ),
            title: "Welcome to SplitKaro!",
            subtitle:
              "Track your expenses, settle debts, and manage budgets seamlessly.",
          },
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={{ width: 300, height: 200 }}
                source={require("../../assets/animation/simplify.json")}
                autoPlay
                loop
              />
            ),
            title: "Simplify Expense Tracking",
            subtitle:
              "Easily add and split expenses with friends, family, or colleagues.",
          },
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={{ width: 300, height: 200 }}
                source={require("../../assets/animation/budget.json")}
                autoPlay
                loop
              />
            ),
            title: "Budget & Save Smartly",
            subtitle:
              "Set budgets, monitor spending, and achieve your financial goals.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    paddingVertical: 20,
  },
  logo: {
    width: 300,
    height: 50,
  },
  doneBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});
