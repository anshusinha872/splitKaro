import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = (props) => {
  return (
    <View
      style={[
        styles.balanceCard,
        { backgroundColor: props.type === "owe" ? "#2AB784" : "#FD5662" },
      ]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="log-out"
            size={24}
            style={{
              transform: [{ rotate: props.type === "owe" ? "90deg" : "-90deg" }],
            }}
            color={props.type === "owe" ? "#2AB784" : "#FD5662"}
          />
        </View>
        <View>
          <Text style={styles.amount}>${props.amount}</Text>
          <Text style={styles.oweText}>
            {props.type === "owe" ? "You Owe" : "Owes You"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  balanceCard: {
    width: "48%",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  oweText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
  arrowIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    opacity: 0.8,
  },
});
