import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const GroupBalance = () => {
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
    <TouchableOpacity onPress={() => navigateToGroup(item)}>
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
    </TouchableOpacity>
  );
  return (
    <View>
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
  groupListContainer: {
    paddingTop: 16,
    paddingBottom: 200,
  },
});
export default GroupBalance;
