import React, { useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment"; // Import moment.js for date formatting and grouping
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
        date: "2024-01-20",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
      {
        id: "2",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹300",
        date: "2024-01-15",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
      {
        id: "3",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹200",
        date: "2023-12-25",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
      {
        id: "4",
        category: "Shopping",
        description: "Buy some grocery",
        amount: "- ₹100",
        date: "2023-12-10",
        icon: require("../../assets/icons/shopping-bag.png"),
      },
    ];

    // Example members data (replace with actual data from `group.members`)
    const members = [
      { id: "1", name: "Alice", owedAmount: "₹200" },
      { id: "2", name: "Bob", owedAmount: "-₹50" },
      { id: "3", name: "Charlie", owedAmount: "₹150" },
    ];

    // Group transactions by year and month
    const groupTransactionsByDate = (data) => {
      return data.reduce((acc, transaction) => {
        const year = moment(transaction.date).format("YYYY");
        const month = moment(transaction.date).format("MMMM");
        if (!acc[year]) acc[year] = {};
        if (!acc[year][month]) acc[year][month] = [];
        acc[year][month].push(transaction);
        return acc;
      }, {});
    };

    const groupedTransactions = groupTransactionsByDate(transactions);

    const renderGroupedTransactions = () =>
      Object.keys(groupedTransactions).map((year) => (
        <View key={year}>
          <Text style={styles.yearText}>{year}</Text>
          {Object.keys(groupedTransactions[year]).map((month) => (
            <View key={month}>
              <Text style={styles.monthText}>{month}</Text>
              {groupedTransactions[year][month].map((transaction) => (
                <View style={styles.transaction} key={transaction.id}>
                  <View style={styles.transactionIconContainer}>
                    <Image
                      style={styles.transactionIcon}
                      source={transaction.icon}
                    />
                  </View>
                  <View style={styles.transactionDetails}>
                    <View style={styles.transactionCategoryDetails}>
                      <Text style={styles.transactionCategory}>
                        {transaction.category}
                      </Text>
                      <Text style={styles.transactionDescription}>
                        {transaction.description}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.transactionAmount}>
                        {transaction.amount}
                      </Text>
                      <Text style={styles.transactionDate}>
                        {moment(transaction.date).format("Do MMM")}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      ));

    const renderMemberOwedAmounts = () =>
      members.map((member) => (
        <View key={member.id} style={styles.memberOwedContainer}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text
            style={[
              styles.memberOwedAmount,
              {
                color:
                  parseFloat(member.owedAmount.replace("₹", "")) < 0
                    ? "red"
                    : "green",
              },
            ]}
          >
            {member.owedAmount}
          </Text>
        </View>
      ));

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
            You are owed{" "}
            <Text style={{ fontWeight: "bold" }}>{group.amount}</Text> overall
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            height: 60,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "center" }}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Settle up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Charts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Balances</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Totals</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.memberListContainer}>
          <Text style={styles.memberListTitle}>Member Balances</Text>
          {renderMemberOwedAmounts()}
        </View>
        <ScrollView style={styles.transactionListContainer}>
          {renderGroupedTransactions()}
        </ScrollView>
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
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
  },
  groupInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.7,
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  groupDetails: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  transactionListContainer: {
    marginTop: 10,
    padding: 10,
  },
  yearText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginVertical: 10,
  },
  monthText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginVertical: 5,
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
  memberListContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  memberListTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#444",
  },
  memberOwedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  memberName: {
    fontSize: 14,
    color: "#333",
  },
  memberOwedAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  btn: {
    borderColor: "#6C63FF",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  btnText: {
    color: "#6C63FF",
  },
});

export default ViewGroup;
