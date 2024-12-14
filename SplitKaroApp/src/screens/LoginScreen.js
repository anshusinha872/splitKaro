import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [loginForm, setLoginForm] = React.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const onChange = (key, value) => {
    setLoginForm({ ...loginForm, [key]: value });
    setError({ ...error, [key]: "" }); // Clear error on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onBlur = (key) => {
    if (key === "email") {
      if (!validateEmail(loginForm.email)) {
        setError((prevError) => ({
          ...prevError,
          email: "Invalid email address",
        }));
      }
    }
  };

  const handleLogin = () => {
    if (!loginForm.email || !validateEmail(loginForm.email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email",
      }));
      return;
    }

    if (!loginForm.password) {
      setError((prevError) => ({
        ...prevError,
        password: "Password is required",
      }));
      return;
    }

    // Simulate successful login
    console.log("Login successful", loginForm);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // navigateToMainApp();
    }, 2000);
    return;
    navigation.replace("MainApp"); // Navigate to the TabNavigator
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        Welcome to
        <Text style={{ color: "#7F3DFF" }}> SplitKaro!</Text>
      </Text>
      <Text style={styles.subHeadingText}>Please login to continue</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          value={loginForm.email}
          style={styles.inputField}
          onBlur={() => onBlur("email")}
          onChangeText={(text) => onChange("email", text)}
        />
      </View>
      {error.email ? <Text style={styles.errorText}>{error.email}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your password"
          keyboardType="default"
          style={styles.inputField}
          value={loginForm.password}
          secureTextEntry={!showPassword}
          onChangeText={(text) => onChange("password", text)}
        />
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="#91919F"
          onPress={toggleShowPassword}
          style={{ position: "absolute", right: 10, top: 10 }}
        />
        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        disabled={loading}
        onPress={handleLogin}
        style={[styles.loginBtn, loading ? { backgroundColor: "#B18AFF" } : null]}
      >
        <Text style={styles.btnText}>Login</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        )}
      </TouchableOpacity>

      <Text style={styles.forgetPasswordText}>Forgot password?</Text>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don't have an account yet?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
    fontFamily: "sans-serif",
  },
  subHeadingText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
    fontFamily: "sans-serif",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#f5f5f5",
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    position: "relative",
  },
  inputField: {
    flex: 1,
    // padding: 10,
    color: "#91919F",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  loginBtn: {
    backgroundColor: "#7F3DFF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  forgetPasswordText: {
    textAlign: "center",
    color: "#7F3DFF",
    marginTop: 20,
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  signupText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  signupLink: {
    color: "#7F3DFF",
    fontSize: 18,
    fontFamily: "sans-serif",
    textDecorationLine: "underline",
  },
});
