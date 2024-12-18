import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import BalanceCard from "../components/BalanceCard";
import Charts from "../components/Charts";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.balanceCardContainer}>
        <BalanceCard amount={100} type="owe" />
        <BalanceCard amount={50} type="owed" />
      </View>
      <View>
        <Charts />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balanceCardContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
