import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GroupScreen = () => {
  const transactions = [
    {
      id: "1",
      category: "Group-1",
      description: "Buy some grocery",
      amount: "₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
    {
      id: "2",
      category: "Group-2",
      description: "Buy some grocery",
      amount: "₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
    {
      id: "3",
      category: "Group-3",
      description: "Buy some grocery",
      amount: "₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
    {
      id: "4",
      category: "Group-4",
      description: "Buy some grocery",
      amount: "₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
  ];
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.transaction}>
        <View style={styles.transactionIconContainer}>
          <Image style={styles.transactionIcon} source={item.icon} />
        </View>
        <View style={styles.transactionDetails}>
          <View style={styles.transactionCategoryDetails}>
            <Text style={styles.transactionCategory}>{item.category}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 50 }}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groups</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create a Group</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.grpCategoryListContainer}
      >
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grpCategorybtn}>
          <Text style={styles.grpCategorybtnText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.grpCategorybtn, styles.grpCategorybtnActive]}
        >
          <Text
            style={[styles.grpCategorybtnText, styles.grpCategorybtnTextActive]}
          >
            Others
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.subHeader}>
        <Text>
          Overall,you are owned{"  "}
          <Text style={{ fontWeight: "bold" }}>₹500</Text>
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>

      <View style={
        {height: 500}
      }>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.transactionListContainer}
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 5,
    backgroundColor: "#6C63FF",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  btnText: {
    color: "#fff",
  },
  grpCategoryListContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: 40,
  },
  grpCategorybtn: {
    borderWidth: 2,
    borderColor: "#6C63FF",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
    height: 30,
  },
  grpCategorybtnText: {
    color: "#6C63FF",
    fontSize: 12,
  },
  grpCategorybtnActive: {
    backgroundColor: "#6C63FF",
  },
  grpCategorybtnTextActive: {
    color: "#fff",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  transactionListContainer: {
    marginTop: 10,
    paddingBottom: 150,
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#FFF",
  },
  transactionIconContainer: {
    backgroundColor: "#FCEED4",
    padding: 5,
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
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 12,
  },
});

export default GroupScreen;
