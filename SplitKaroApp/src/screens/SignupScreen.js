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
import CheckBox from "react-native-check-box";

const SignupScreen = ({ navigation }) => {
  const [signupForm, setsignupForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    checked: false,
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const onChange = (key, value) => {
    setsignupForm({ ...signupForm, [key]: value });
    setError({ ...error, [key]: "" }); // Clear error on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onBlur = (key) => {
    if (key === "email") {
      if (!validateEmail(signupForm.email)) {
        setError((prevError) => ({
          ...prevError,
          email: "Invalid email address",
        }));
      }
    }
    if (key === "phone") {
      if (signupForm.phone.length !== 10) {
        setError((prevError) => ({
          ...prevError,
          phone: "Invalid phone number",
        }));
      }
    }
    if (key === "password") {
      if (signupForm.password.length < 8) {
        setError((prevError) => ({
          ...prevError,
          password: "Password must be atleast 8 characters",
        }));
      }
    }
    if (key === "name") {
      if (signupForm.name.length < 3) {
        setError((prevError) => ({
          ...prevError,
          name: "Name must be atleast 3 characters",
        }));
      }
    }
  };

  const handleLogin = () => {
    if (!signupForm.email || !validateEmail(signupForm.email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email",
      }));
      return;
    }

    if (!signupForm.password) {
      setError((prevError) => ({
        ...prevError,
        password: "Password is required",
      }));
      return;
    }

    // Simulate successful login
    console.log("Login successful", signupForm);
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
      <Text style={styles.subHeadingText}>Please Signup to continue</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          value={signupForm.name}
          style={styles.inputField}
          onBlur={() => onBlur("name")}
          onChangeText={(text) => onChange("name", text)}
        />
      </View>
      {error.name ? <Text style={styles.errorText}>{error.name}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          value={signupForm.email}
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
          value={signupForm.password}
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
      <View style={styles.checkBoxContainer}>
        <CheckBox
          style={{
            flex: 1,
            //  marginHorizontal: 10,
          }}
          onClick={() => {
            onChange("checked", !signupForm.checked);
          }}
          isChecked={signupForm.checked}
          checkedCheckBoxColor="#7F3DFF"
          uncheckedCheckBoxColor="#7F3DFF"
        />
        <Text style={{ color: "#91919F", fontSize: 16, fontWeight: "bold" }}>
          By signing up, you agree to the
          <Text style={{ color: "#7F3DFF" }}>
            {" "}
            Terms
            {"\n"}
            of Service and Privacy Policy
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        disabled={loading}
        onPress={handleLogin}
        style={[
          styles.loginBtn,
          loading ? { backgroundColor: "#B18AFF" } : null,
        ]}
      >
        <Text style={styles.btnText}>Sign Up</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        )}
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          color: "#91919F",
          marginTop: 10,
          fontSize: 18,
          fontFamily: "sans-serif",
        }}
      >
        or with{" "}
      </Text>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Already have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

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
    padding: 10,
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
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 0,
  },
});
