import React, { useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const ViewGroup = React.memo(
  ({
    route: {
      params: { group },
    },
    navigation,
  }) => {
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
      {
        id: "5",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹500",
        date: "20th Jan",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
      {
        id: "6",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹500",
        date: "20th Jan",
        icon: require("../../assets/icons/shopping-bag.png"),
      }
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
            <Text style={styles.transactionDescription}>
              {item.description}
            </Text>
          </View>
          <View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
    const handleNavigate = useCallback(() => {
      navigation.navigate("GroupSetting");
    }, [navigation]);

    return (
      <View style={styles.container}>
        <View style={styles.groupHeader}>
          <View style={styles.groupInfo}>
            <View style={styles.iconContainer}>
              <Image source={group.icon} style={styles.icon} />
            </View>
            <View>
              <Text style={styles.categoryText}>{group.category}</Text>
              <Text style={{ color: "#ccc" }}>{group.description}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleNavigate}
            accessible
            accessibilityLabel="Go to group settings"
          >
            <Ionicons name="settings-outline" size={30} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.groupDetails}>
          <Text>
            You are owned{" "}
            <Text style={{ fontWeight: "bold" }}>{group.amount}</Text> overall
          </Text>
          <View style={styles.membersListContainer}>
            <Text style={styles.member}>
              Anshu owes you <Text style={{ fontWeight: "bold" }}>₹100</Text>
            </Text>
            <Text style={styles.member}>
              Anshu owes you <Text style={{ fontWeight: "bold" }}>₹100</Text>
            </Text>
            <Text style={styles.member}>
              Anshu owes you <Text style={{ fontWeight: "bold" }}>₹100</Text>
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => console.log("Add Expense")}
            >
              <Text style={styles.btnText}>Settle Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => console.log("Add Expense")}
            >
              <Text style={styles.btn2Text}>Charts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => console.log("Add Expense")}
            >
              <Text style={styles.btn2Text}>Balances</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => console.log("Add Expense")}
            >
              <Text style={styles.btn2Text}>Total</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25, // Better ratio for a circular image
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
  },
  groupInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.7, // Adjust width dynamically
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333", // Better contrast for readability
  },
  groupDetails: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  membersListContainer: {
    marginTop: 10,
  },
  member: {
    fontSize: 12,
    color: "#000",
    fontWeight: "100",
    marginBottom: 5,
  },
  btnContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    height: 50,
  },
  btn: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  btnText: {
    color: "#fff",
  },
  btn2: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  btn2Text: {
    color: "#6C63FF",
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

export default ViewGroup;
