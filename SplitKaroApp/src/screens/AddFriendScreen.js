import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";

const AddFriendScreen = ({ navigation }) => {
  const rotate = new Animated.Value(0);
  const [contacts, setContacts] = React.useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        loadContacts();
      }
    })();
  }, []);

  const startRotation = () => {
    // Continuously rotate the icon
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const loadContacts = async () => {
    startRotation();
    setLoading(true);
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
    });

    if (data.length > 0) {
      setContacts(data);
      setFilteredContacts(data);
    }
    setLoading(false);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const lowercasedQuery = text.toLowerCase();

    const filtered = contacts.filter((contact) => {
      const nameMatch = contact.name?.toLowerCase().startsWith(lowercasedQuery);
      const phoneMatch = contact.phoneNumbers?.some((phone) =>
        phone.number.replace(/\s/g, "").toLowerCase().startsWith(lowercasedQuery)
      );

      return nameMatch || phoneMatch;
    });

    setFilteredContacts(filtered);
  };

  const onContactSelect = (contact) => {
    console.log(contact);
    // You can navigate or do something with the selected contact here.
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => onContactSelect(item)}
    >
      {item.imageAvailable && item.image?.uri ? (
        <Image source={{ uri: item.image.uri }} style={styles.contactImage} />
      ) : (
        <View style={styles.contactPlaceholder}>
          <Ionicons name="person" size={24} color="#fff" />
        </View>
      )}
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        {item.phoneNumbers && item.phoneNumbers.length > 0 && (
          <Text style={styles.contactNumber}>
            {item.phoneNumbers[0].number}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  // Interpolating the rotation value to apply the animation
  const rotationInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

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
        <TextInput
          placeholder="Search by name or contact number"
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <Animated.View
          style={[styles.closeIcon, { transform: [{ rotate: rotationInterpolate }] }]}
        >
          <Ionicons
            name="sync-outline"
            size={20}
            color="black"
            onPress={loadContacts}
          />
        </Animated.View>
      </View>

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={10}
        getItemLayout={(data, index) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
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
    backgroundColor: "rgba(0, 122, 255, 0.1)",
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
    backgroundColor: "rgba(0, 122, 255, 0.1)",
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
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contactPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  contactDetails: {
    marginLeft: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNumber: {
    fontSize: 14,
    color: "#888",
  },
});
