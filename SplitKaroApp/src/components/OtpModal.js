import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";

const OtpModal = ({
  modalVisible,
  setModalVisible,
  navigation,
  props,
  onSucess,
  onFail,
  onCancel,
}) => {
  // console.log(props);
  // console.log(onSucess);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            // setModalVisible(!modalVisible);
            onCancel();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Enter your
                {"\n"}
                Verification Code
              </Text>
              <View style={styles.wrapper}>
                <OtpInput
                  numberOfDigits={6}
                  autoFocus={true}
                  focusColor="#7F3DFF"
                  hideStick={false}
                  secureTextEntry={false}
                  onTextChange={(text) => console.log(text)}
                  onFilled={(text) => console.log(`OTP is ${text}`)}
                  theme={{
                    pinCodeContainerStyle: styles.otpBox, // Adjust container spacing
                    pinCodeTextStyle: styles.pinCodeTextStyle, // Adjust text styles
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "#7F3DFF",
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "left",
                    marginTop: 5,
                    marginBottom: 5,
                    fontFamily: "sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  04:59
                </Text>
              </View>
              <View style={{}}>
                <Text>
                  We send verification code to your email
                  <Text style={{ fontWeight: "bold", color: "#7F3DFF" }}>
                    {" "}
                    anshusinha872@gmail.com
                  </Text>
                  You can check your inbox.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  Didn't receive the code?{" "}
                  <Text style={{ color: "#7F3DFF", fontWeight: "bold" }}>
                    Resend
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => onSucess()}
                style={[styles.loginBtn]}
              >
                <Text style={styles.btnText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
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
  centeredView: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  modalView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
  },
  wrapper: {
    paddingHorizontal: 0,
    // marginBottom: 20,
  },
  otpContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  otpBox: {
    width: 40, // Reduced size for a smaller box
    height: 40, // Adjust height for a balanced look
  },
  pinCodeTextStyle: {
    fontSize: 20,
    color: "#000",
  },
});

export default OtpModal;
