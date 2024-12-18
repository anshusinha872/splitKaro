import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const BalanceCard = (props) => {
  return (
    <View
      style={{
        ...styles.balanceCard,
        backgroundColor: props.type === "owe" ? "#00A86B" : "#FD3C4A",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center",height:100 }}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="log-out"
            size={40}
            style={{ transform: [{ rotate: props.type === "owe" ? "90deg" : "-90deg" }] }}
            color={props.type === "owe" ? "#0ae093" : "#d30a19"}
          />
        </View>
        <View>
          <Text style={styles.amount}>${props.amount}</Text>
          <Text style={styles.oweText}>
            {props.type === "owe" ? "You Owe" : "Owes You"}
          </Text>
        </View>
      </View>
      <Ionicons
        name={props.type === "owe" ? "arrow-up" : "arrow-down"} // Change arrow direction based on type
        size={70}
        color={props.type === "owe" ? "#0ae093" : "#d30a19"} // Change arrow color based on type
        style={styles.arrowIcon}
      />{" "}
      {/* Adding arrow icon */}
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  balanceCard: {
    width: "48%",
    // padding: 10,
    height: 100,
    borderRadius: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    zIndex: 1,
    letterSpacing: 1,
  },
  iconContainer: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  oweText: {
    fontSize: 14,
    color: "#fff",
    letterSpacing: 1,
    marginBottom: 10,
    zIndex: 1,
    fontWeight: "900",
  },
  arrowIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ rotate: "45deg" }],
  },
});
