import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const FriendScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>FriendScreen</Text>
    </View>
  )
}

export default FriendScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})