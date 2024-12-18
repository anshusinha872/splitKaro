import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FriendScreen from "../screens/FriendScreen";
import GroupScreen from "../screens/GroupScreen";
import SettingScreen from "../screens/SettingScreen";
import ActivityScreen from "../screens/ActivityScreen";
import { TabBar } from "../components/TabBar";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={FriendScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          header: () => <Header />,
        }}
      />
      {/* <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          header: () => <Header />,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
