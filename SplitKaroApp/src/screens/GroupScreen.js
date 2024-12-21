import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groups</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create a Group</Text>
        </TouchableOpacity>
      </View>

      {/* Adjusted ScrollView */}
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
            style={[
              styles.grpCategorybtnText,
              styles.grpCategorybtnTextActive,
            ]}
          >
            Others
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{ marginTop: 10 }}>
        <Text>Group List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    flexDirection: "row", // Ensure horizontal layout
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
    marginRight: 5, // Adds space between buttons
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
});

export default GroupScreen;
