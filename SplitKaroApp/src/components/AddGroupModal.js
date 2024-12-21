import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const AddGroupModal = ({
  modalVisible,
  setModalVisible,
  onSuccess,
  onCancel,
}) => {
  const [groupName, setGroupName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSuccess = () => {
    if (!groupName.trim()) {
      Alert.alert("Error", "Please enter a group name");
      return;
    }
    console.log({ groupName, selectedCategory });
    // onSuccess({ groupName, selectedCategory });
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={styles.modalText}>Create a Group</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{ position: "absolute", top: 10, right: 10 }}
                >
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter Group Name"
                value={groupName}
                onChangeText={setGroupName}
              />
              <Text style={styles.grpCategoryText}>Category</Text>
              <FlatList
                horizontal
                data={["All", "Home", "Trip", "Personal", "Others"]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.grpCategoryBtn,
                      selectedCategory === item && styles.selectedCategoryBtn,
                    ]}
                    onPress={() => setSelectedCategory(item)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        selectedCategory === item &&
                          styles.selectedCategoryText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={styles.grpCategoryListContainer}
                showsHorizontalScrollIndicator={false}
              />
              <TouchableOpacity onPress={handleSuccess} style={styles.loginBtn}>
                <Text style={styles.btnText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  grpCategoryText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  grpCategoryListContainer: {
    width: "100%",
    marginBottom: 20,
  },
  grpCategoryBtn: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategoryBtn: {
    backgroundColor: "#7F3DFF",
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  loginBtn: {
    backgroundColor: "#7F3DFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddGroupModal;
