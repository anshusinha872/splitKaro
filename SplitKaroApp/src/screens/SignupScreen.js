import React from "react";
import { View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.replace("MainApp"); // Navigate to the TabNavigator
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Signup Screen</Text>
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
