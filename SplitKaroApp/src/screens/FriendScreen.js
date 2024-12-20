import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const FriendScreen = ({ navigation }) => {
  const friends = [
    {
      id: "1",
      name: "John Doe",
      amount: 100,
    },
    {
      id: "2",
      name: "Jane Doe",
      amount: 200,
    },
    {
      id: "3",
      name: "John Doe",
      amount: 100,
    },
    {
      id: "4",
      name: "Jane Doe",
      amount: 200,
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.friendCard}>
      {/* <View style={styles.profilePicContainer}>
        <Ionicons name="person" size={24} color="black" />
      </View> */}
      <Image
        source={require("../../assets/image/anshu.jpg")}
        style={styles.profilePic}
      />
      <View style={styles.friendDetailsContainer}>
        <View style={styles.friendDetails}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.friendAmountText}>
            Owes You: <Text style={styles.friendAmount}>₹{item.amount}</Text>
          </Text>
        </View>
        <View style={styles.arrowIconContainer}>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
  const addFriend = () => {
    console.log("Add Friend");
    return;
    // navigation.navigate('AddFriend')
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Friends</Text>
        <Ionicons name="add" size={24} color="black" onPress={addFriend} />
      </View>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.friendListContainer}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FriendScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  friendListContainer: {
    width: "100%",
    padding: 10,
  },
  friendCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  profilePicContainer: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  profilePic:{
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  friendDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  friendDetails: {
    // width: "80%",
  },
  arrowIconContainer: {
    // width: "10%",
  },
  friendName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  friendAmountText: {
    fontSize: 14,
    color: "#333",
  },
  friendAmount: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
