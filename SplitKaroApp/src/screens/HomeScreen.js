import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import BalanceCard from "../components/BalanceCard";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome to SplitKaro!</Text>
      <Button
        title="Go to Budget"
        onPress={() => navigation.navigate("Budget")}
      /> */}
      <View style={styles.balanceCardContainer}>
        <BalanceCard
          amount={100}
          type="owe"
        />
        <BalanceCard 
          amount={50}
          type="owed"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
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
