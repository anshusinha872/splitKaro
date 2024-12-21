import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GroupScreen = () => {
  const groups = [
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
    {
      id: "5",
      category: "Group-5",
      description: "Buy some grocery",
      amount: "₹500",
      date: "20th Jan",
      icon: require("../../assets/icons/shopping-bag.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.group}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={styles.groupIconContainer}>
          <Image style={styles.groupIcon} source={item.icon} />
        </View>
        <View style={styles.groupDetails}>
          <View style={styles.groupCategoryDetails}>
            <Text style={styles.groupCategory}>{item.category}</Text>
          </View>
          <View style={styles.groupDateContainer}>
            <Text style={styles.groupDate}>{item.date}</Text>
            <Text style={styles.groupAmount}>{item.amount}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.groupDescriptionContainer}>
          <View style={styles.groupDescription}>
            <Ionicons
              name="return-down-forward-outline"
              size={24}
              color="#6C63FF"
              style={{ marginRight: 6 }} // Add space between icon and text
            />
            <Text>{item.description}</Text>
          </View>
          <View style={styles.groupDescription}>
            <Ionicons
              name="return-down-forward-outline"
              size={24}
              color="#6C63FF"
              style={{ marginRight: 6 }} // Add space between icon and text
            />
            <Text>{item.description}</Text>
          </View>
          <View style={styles.groupDescription}>
            <Ionicons
              name="return-down-forward-outline"
              size={24}
              color="#6C63FF"
              style={{ marginRight: 6 }} // Add space between icon and text
            />
            <Text>{item.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groups</Text>
        <TouchableOpacity style={styles.createGroupBtn}>
          <Text style={styles.createGroupText}>Create a Group</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={["All", "Home", "Trip", "Personal", "Others"]}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.grpCategorybtn}>
            <Text style={styles.grpCategorybtnText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.grpCategoryListContainer}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>
          Overall, you are owned <Text style={styles.boldText}>₹500</Text>
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.groupListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  createGroupBtn: {
    backgroundColor: "#6C63FF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  createGroupText: {
    color: "#fff",
    fontSize: 14,
  },
  grpCategoryListContainer: {
    flexDirection: "row",
    marginTop: 16,
    height: 50,
  },
  grpCategorybtn: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    borderRadius: 20,
  },
  grpCategorybtnText: {
    color: "#6C63FF",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  subHeaderText: {
    fontSize: 12,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    color: "#FD5662",
  },
  btn: {
    backgroundColor: "#6C63FF",
    padding: 8,
    borderRadius: 50,
  },
  groupListContainer: {
    paddingTop: 16,
    paddingBottom: 200,
  },
  group: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 16,
    padding: 5,
  },
  groupIconContainer: {
    backgroundColor: "#FCEED4",
    padding: 8,
    borderRadius: 10,
  },
  groupIcon: {
    width: 30,
    height: 30,
  },
  groupDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 12,
    flex: 1,
  },
  groupCategoryDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupCategory: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  groupDateContainer: {
    alignItems: "flex-end",
  },
  groupDate: {
    fontSize: 12,
    color: "#A1A1A1",
  },
  groupAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FD5662",
  },
  groupDescriptionContainer: {
    marginLeft: 20,
    flexDirection: "column", // Ensure descriptions stack vertically
    justifyContent: "flex-start", // Align items to the start
    // marginTop: 8,
  },
  groupDescription: {
    fontSize: 14,
    color: "#A1A1A1",
    flexDirection: "row", // For icons and text alignment
    alignItems: "center", // Align items to the center
    marginBottom: 4, // Add spacing between lines
  },
  treeIcon: {
    color: "#6C63FF",
    position: "absolute",
    left: 0,
  },
});

export default GroupScreen;
