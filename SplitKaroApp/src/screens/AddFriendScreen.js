import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddFriendScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Friend</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Friends")}
          style={styles.doneBtn}
        >
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchIconContainer}>
          <Ionicons name="search" size={14} color="#007AFF" />
        </View>
        <TextInput placeholder="Search by name or contact number" style={styles.searchInput}></TextInput>
        <Ionicons name="sync-outline" size={20} color="black" style={styles.closeIcon} />
      </View>
    </View>
  );
};

export default AddFriendScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  doneBtn: {
    backgroundColor: "rgba(0, 122, 255,0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "#007AFF",
  },
  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    borderRadius: 25,
  },
  searchIconContainer: {
    backgroundColor: "rgba(0, 122, 255,0.1)",
    padding: 5,
    borderRadius: 25,
    marginLeft: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  closeIcon: {
    marginRight: 10,
  },
});
