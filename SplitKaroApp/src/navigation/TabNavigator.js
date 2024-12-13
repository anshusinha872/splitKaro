// src/navigation/TabNavigator.js
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Views
import HomeScreen from "../screens/HomeScreen";
import FriendScreen from "../screens/FriendScreen";
import GroupScreen from "../screens/GroupScreen";
import SettingScreen from "../screens/SettingScreen";
import ActivityScreen from "../screens/ActivityScreen";
import BudgetScreen from "../screens/BudgetScreen";
import { TabBar } from "../components/TabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendScreen} />
      <Tab.Screen name="Groups" component={GroupScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
