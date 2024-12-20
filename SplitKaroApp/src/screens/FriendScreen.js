import React from "react";
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FriendScreen = ({ navigation }) => {
  const friends = [
    { id: "1", name: "John Doe", amount: 100 },
    { id: "2", name: "Jane Doe", amount: 200 },
    { id: "3", name: "John Smith", amount: 150 },
    { id: "4", name: "Emily Davis", amount: 300 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.friendCard}>
      <Image
        source={require("../../assets/image/anshu.jpg")}
        style={styles.profilePic}
      />
      <View style={styles.friendDetails}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendAmountText}>
          Owes You: <Text style={styles.friendAmount}>₹{item.amount}</Text>
        </Text>
      </View>
      <Ionicons
        name="chevron-forward-outline"
        size={24}
        color="#444"
        style={styles.arrowIcon}
      />
    </View>
  );

  const addFriend = () => {
    console.log("Add Friend");
    // navigation.navigate('AddFriend')
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Friends</Text>
        <TouchableOpacity onPress={addFriend}>
          <Ionicons name="add" size={28} color="#6774dd" />
        </TouchableOpacity>
        
      </View>
      {friends.length > 0 ? (
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.friendListContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No friends added yet. Start now!</Text>
        </View>
      )}
    </View>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 122, 255,0.1)",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "rgba(0, 122, 255,0.1)",
    padding: 15,
    paddingHorizontal: 20,
    // elevation: 3,
  },
  headerText: {
    fontSize: 20,
    color: "#6774dd",
    fontWeight: "bold",
  },
  friendListContainer: {
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 122, 255,0.1)",
    borderRadius: 20,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    // elevation: 2,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  friendAmountText: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  friendAmount: {
    fontWeight: "bold",
    color: "#4caf50",
  },
  arrowIcon: {
    marginLeft: 10,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
  },
});
