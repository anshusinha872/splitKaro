import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ color: "#fff", fontSize: 20 }}>Logo</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.notifcationIconContainer}>
        <Ionicons
          size={24}
          style={{
            color: "#6774dd",
          }}
          name="notifications"
        />

        </View>
        <Ionicons style={{ color: "#fff" }} size={42} name="person-circle" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#6774dd",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  notifcationIconContainer: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default Header;
