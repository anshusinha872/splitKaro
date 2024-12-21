import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: "1",
      category: "Shopping",
      description: "Buy some grocery",
      amount: "- ₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
    {
      id: "2",
      category: "Shopping",
      description: "Buy some grocery",
      amount: "- ₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
    {
        id: "3",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹500",
        date: "20th Jan",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
      {
        id: "4",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹500",
        date: "20th Jan",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
  ];

  const onPressFunction = () => {
    console.log("I'm pressed!");
  };

  const renderItem = ({ item }) => (
    <View style={styles.transaction}>
      <View style={styles.transactionIconContainer}>
        <Image style={styles.transactionIcon} source={item.icon} />
      </View>
      <View style={styles.transactionDetails}>
        <View style={styles.transactionCategoryDetails}>
          <Text style={styles.transactionCategory}>{item.category}</Text>
          <Text style={styles.transactionDescription}>{item.description}</Text>
        </View>
        <View>
          <Text style={styles.transactionAmount}>{item.amount}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.recentTabContainer}>
        <Text style={styles.recentText}>Recent Transaction</Text>
        <Pressable style={styles.recentTab} onPress={onPressFunction}>
          <Text
            style={{
              color: "#6C63FF",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: 0.5,
            }}
          >
            See All
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionListContainer}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    // backgroundColor: "rgba(0, 122, 255,0.1)",
    height: 400,
  },
  recentTabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  recentText: {
    fontSize: 16,
  },
  recentTab: {
    backgroundColor: "#EEE5FF",
    padding: 5,
    borderRadius: 5,
  },
  transactionListContainer: {
    marginTop: 10,
    paddingBottom: 150,
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  transactionIconContainer: {
    backgroundColor: "#FCEED4",
    padding: 10,
    borderRadius: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 10,
  },
  transactionCategoryDetails: {
    flex: 1,
  },
  transactionCategory: {
    fontSize: 16,
  },
  transactionDescription: {
    color: "#A1A1A1",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FD5662",
  },
  transactionDate: {
    color: "#A1A1A1",
  },
});
