import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const Charts = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const screenWidth = Dimensions.get("window").width - 0;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    strokeWidth: 1, 
    useShadowColorFromDataset: false, 
    propsForDots: {
      r: "4", 
      strokeWidth: "1",
      stroke: "#007AFF", 
    },
  };

  // Monthly expense data
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [200, 450, 280, 800, 990, 430],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, 
        strokeWidth: 4, 
      },
    ],
  };

  // Daily expense data
  const dailyData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","1", "2", "3", "4", "5", "6", "7", "8", "9", "10","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: [20, 30, 50, 40, 60, 45, 35, 80, 100, 90,20, 30, 50, 40, 60, 45, 35, 80, 100, 90,20, 30, 50, 40, 60, 45, 35, 80, 100, 90],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Blue line color
        strokeWidth: 4, // Bold line thickness
      },
    ],
  };

  // Toggle button state
  const toggleButton = (type) => {
    setIsMonthly(type === "monthly");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses Overview</Text>
      <LineChart
        data={isMonthly ? monthlyData : dailyData} 
        withDots={true} 
        width={screenWidth} 
        withInnerLines={false} 
        height={240}
        chartConfig={chartConfig}
        bezier 
        style={styles.chart}
        withVerticalLabels={true} 
        withHorizontalLabels={true} 
        formatYLabel={(yValue) => "$" + Math.round(yValue)} 
        withOuterLines={false}
        withHorizontalLines={true} 
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, isMonthly && styles.activeBtn]} 
          onPress={() => toggleButton("monthly")}
        >
          <Text
            style={
              isMonthly
                ? [styles.btnText, styles.activeBtnText]
                : styles.btnText
            }
          >
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, !isMonthly && styles.activeBtn]} 
          onPress={() => toggleButton("daily")}
        >
          <Text
            style={
              !isMonthly
                ? [styles.btnText, styles.activeBtnText]
                : styles.btnText
            }
          >
            Daily
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start", // Align elements from the top
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6774dd", // Darker text color
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
    marginTop: 10,
    transform: [{ translateX: -10 }],
  },
  btnContainer: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    width: "100%",
    marginTop: 0,
  },
  btn: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "#6774dd", 
    width: "45%", 
    alignItems: "center", 
  },
  activeBtn: {
    backgroundColor: "#6774dd", 
    borderColor: "#fff", 
  },
  btnText: {
    color: "#6774dd", 
  },
  activeBtnText: {
    color: "#fff",
  },
});