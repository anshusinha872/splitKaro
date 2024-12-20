import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
const ViewFriendModal = ({
  modalVisible,
  setModalVisible,
  navigation,
  props,
  onSucess,
  onFail,
  onCancel,
}) => {
  console.log(props);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);

            // onCancel();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 10 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  onCancel();
                }}
              >
                <View style={styles.arrowIconContainer}>
                  <Ionicons
                    name="close-outline"
                    size={24}
                    color="#444"
                    style={styles.arrowIcon}
                    onPress={() => 
                        setModalVisible(!modalVisible)
                    }
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 30,
                }}
              >
                <Text style={styles.modalText}>{props.name}</Text>
                <Image
                  source={require("../../assets/image/anshu.jpg")}
                  style={styles.profilePic}
                />
              </View>
              <Text style={styles.amountText}>
                Owes You: <Text style={styles.amount}>₹{props.amount}</Text>
              </Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={() => onSucess()}
                  style={[styles.btn]}
                >
                  <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onSucess()}
                  style={[styles.btn]}
                >
                  <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.wrapper}>
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
                style={[styles.btn]}
              >
                <Text style={styles.btnText}>Verify</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  amountText: {
    fontSize: 14,
    color: "#666",
  },
  amount: {
    fontWeight: "bold",
    color: "#4caf50",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  btnText: {
    color: "#6C63FF",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  arrowIconContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 15,
  },
  arrowIcon: {
    // marginLeft: 10,
    color: "#6C63FF",
  },
  centeredView: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  modalView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EEE5FF",    
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

export default ViewFriendModal;
