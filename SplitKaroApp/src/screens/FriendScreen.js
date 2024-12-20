import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ViewFriendModal from "../components/ViewFriendModal";

const FriendScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedFriend, setSelectedFriend] = React.useState(null);
  const friends = [
    { id: "1", name: "Anshu Sinha", amount: 100 },
    { id: "2", name: "Anshu Sinha", amount: 200 },
    { id: "3", name: "Anshu Sinha", amount: 150 },
    { id: "4", name: "Anshu Sinha", amount: 300 },
  ];
  const openModal = (friend) => {
    setSelectedFriend(friend); // Set the selected friend
    setModalVisible(true); // Open the modal
  };
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
      <View style={styles.arrowIconContainer}>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#444"
          style={styles.arrowIcon}
          onPress={() => openModal(item)}
        />
      </View>
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
      </View>
      <View style={styles.friendListContainer}>
        <View style={styles.subHeaderContainer}>
          <TouchableOpacity onPress={addFriend} style={styles.btn}>
            <Text style={styles.btnText}>View Request</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addFriend} style={styles.btn}>
            <Text style={styles.btnText}>Add Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
      {friends.length > 0 ? (
        <View>
          <FlatList
            data={friends}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
          {
            modalVisible && (
              <ViewFriendModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                props={selectedFriend}
                navigation={navigation}
              />
            )
          }
        </View>
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
    padding: 15,
    paddingHorizontal: 20,
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  btn: {
    backgroundColor: "#EEE5FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  headerText: {
    fontSize: 20,
    color: "#6774dd",
    fontWeight: "bold",
  },
  friendListContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  listContainer: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#fff",
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "rgba(0, 122, 255,0.1)",
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
  arrowIconContainer: {
    backgroundColor: "#EEE5FF",
    borderRadius: 50,
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    // marginLeft: 10,
    color: "#6C63FF",
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
