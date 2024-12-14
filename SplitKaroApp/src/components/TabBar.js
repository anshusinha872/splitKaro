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
    Onboarding: ["walk", "walk-outline"]
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
            style={[
              styles.tabItem,
              isFocused ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Animated.View style={isFocused ? styles.iconActive : styles.icon}>
              <Ionicons
                name={isFocused ? icons[route.name][0] : icons[route.name][1]}
                size={24}
                color={isFocused ? "#FFD700" : "#fff"}
              />
            </Animated.View>
            <Text
              style={[
                styles.tabLabel,
                isFocused ? styles.activeLabel : styles.inactiveLabel,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#282c34",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#444",
    transform: [{ scale: 1.1 }],
    elevation: 5,
  },
  inactiveTab: {
    backgroundColor: "transparent",
  },
  icon: {
    marginBottom: 2,
  },
  iconActive: {
    marginBottom: 2,
    transform: [{ scale: 1.2 }],
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  activeLabel: {
    color: "#FFD700",
  },
  inactiveLabel: {
    color: "#ccc",
  },
});
