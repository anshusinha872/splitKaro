import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable, Animated } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";

export function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    Home: ["home", "home-outline"],
    Friends: ["person", "person-outline"],
    Groups: ["people", "people-outline"],
    Activity: ["receipt", "receipt-outline"],
    Setting: ["settings", "settings-outline"],
    Onboarding: ["walk", "walk-outline"],
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, isFocused ? styles.activeTab : styles.inactiveTab]}
          >
            <View style={[styles.iconContainer, isFocused ? styles.activeIconContainer : null]}>
              <Ionicons
                name={isFocused ? icons[route.name][0] : icons[route.name][1]}
                size={24}
                color={isFocused ? "#fff" : "#ccc"}
              />
            </View>
            {/* <Text
              style={[
                styles.tabLabel,
                isFocused ? styles.activeLabel : styles.inactiveLabel,
              ]}
            >
              {label}
            </Text> */}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {},
  inactiveTab: {},
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "#3f3f3f",
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "500",
  },
  activeLabel: {
    color: "#ffffff",
  },
  inactiveLabel: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
