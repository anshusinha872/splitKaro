import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Pressable,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";

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
    AddExpense: ["add", "add-outline"],
    AddFriend: ["person-add", "person-add-outline"],
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const toggleModal = () => {
    if (isModalVisible) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    } else {
      setModalVisible(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const modalScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const modalOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.tabbar}>
      {state.routes
        .filter((route) => route.name !== "AddFriend")
        .map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            if (route.name === "AddExpense") {
              toggleModal();
            } else {
              if (isModalVisible) {
                toggleModal();
              }
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            }
          };

          return (
            <Pressable
              key={route.name}
              href={buildHref(route.name, route.params)}
              onPress={onPress}
              style={[
                styles.tabItem,
                isFocused ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  isModalVisible && route.name === "AddExpense"
                    ? styles.addExpenseIconContainerActive
                    : {},
                ]}
              >
                <Ionicons
                  name={isFocused ? icons[route.name][0] : icons[route.name][1]}
                  size={24}
                  color={isFocused ? "#fff" : "#ccc"}
                />
              </View>
            </Pressable>
          );
        })}

      {isModalVisible && (
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalContent,
              {
                transform: [{ scale: modalScale }],
                opacity: modalOpacity,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "column",
                // gap: 20,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => alert("Option 1 Selected")}
              >
                <Ionicons name="card" size={24} color="#fff" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <TouchableOpacity
                  style={[styles.modalButton]}
                  onPress={() => alert("Option 2 Selected")}
                >
                  <Ionicons name="cash" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton]}
                  onPress={() => alert("Option 4 Selected")}
                >
                  <Ionicons name="wallet" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      )}
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
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  addExpenseIconContainerActive: {
    backgroundColor: "#3f3f3f",
    transform: [{ translateY: -20 }, { scale: 1.2 }],
  },
  modalOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
    transform: [{ translateX: 10 }],
  },
  modalContent: {
    width: 150,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  modalButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#1f1f1f",
  },
});
